import { DocumentEditor } from '@onlyoffice/document-editor-react';
import axios from 'axios';

import serverConfig from '../../../../config';
import { useEffect, useState } from 'react';
import eventBus from './event';

const onDocumentReady = function (event: any) {
  console.log('Document is loaded');
};

const onLoadComponentError = function (
  errorCode: Number,
  errorDescription: String
) {
  switch (errorCode) {
    case -1: // Unknown error loading component
      console.log(errorDescription);
      break;

    case -2: // Error load DocsAPI from http://documentserver/
      console.log(errorDescription);
      break;

    case -3: // DocsAPI is not defined
      console.log(errorDescription);
      break;
  }
};

const loadConfig = async (documentType: string) => {
  const rs = await axios.get(
    `http://${serverConfig.host}:${serverConfig.apiPort}/api/open/${documentType}`
  );
  return rs.data;
};

let oldConfig = {};

function Editor(props: { documentType: string }) {
  const documentType = props.documentType;
  const [docConfig, setDocConfig] = useState();

  const handler = (data) => {
    const { documentType: inType } = data;
    if (inType !== documentType) {
      return;
    }

    const {
      formData: { permissions = [], type = 'desktop', waterMark = '' },
    } = data;

    console.log(data);

    // 覆盖模式
    oldConfig.type = type;

    // 覆盖权限;
    const defaultPermissionList = [
      'chat',
      'comment',
      'copy',
      'copyOut',
      'download',
      'edit',
      'print',
      'review',
      'protect',
    ];
    const newPermissionsObject = {};
    defaultPermissionList.map((key) => {
      const hasKey = permissions.includes(key);
      newPermissionsObject[key] = !!hasKey;
      if (key === 'edit') {
        oldConfig.editorConfig['mode'] = !!hasKey ? 'edit' : 'view';
      }
    });
    oldConfig.document.permissions = newPermissionsObject;

    // 覆盖水印
    if (waterMark) {
      oldConfig.editorConfig.customization.waterMark.value = waterMark;
    } else {
      oldConfig.editorConfig.customization.waterMark.value = '';
    }

    // 覆盖宽度
    if (type === 'mobile') {
      oldConfig.width = '50%';
      oldConfig.height = '80%';
    } else {
      oldConfig.width = '100%';
      oldConfig.height = '100%';
    }

    // console.log(oldConfig);

    setDocConfig({ ...oldConfig });
  };

  useEffect(() => {
    loadConfig(documentType).then((rs) => {
      oldConfig = rs.data;
      setDocConfig(oldConfig);
    });

    eventBus.on('reopen', handler);

    return () => {
      eventBus.off('reopen', handler);
    };
  }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(docConfig, null, 2)}</pre> */}
      {docConfig ? (
        <DocumentEditor
          id={`editor_${documentType}`}
          documentServerUrl={serverConfig.documentServerUrl}
          config={docConfig}
          events_onDocumentReady={onDocumentReady}
          onLoadComponentError={onLoadComponentError}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default Editor;
