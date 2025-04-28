// Uncomment this line to use CSS modules
import styles from './app.module.scss';

// import { Route, Routes, Link } from 'react-router-dom';

import { DocumentEditor } from '@onlyoffice/document-editor-react';

var onDocumentReady = function (event: any) {
  console.log('Document is loaded');
};

var onLoadComponentError = function (
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

export function App() {
  return (
    <>
      <DocumentEditor
        id="editor"
        documentServerUrl="http://192.168.3.159:8010"
        config={{
          document: {
            fileType: 'docx',
            key: 'Khirz6zTPdfd7',
            title: '示例文档.docx',
            url: 'https://moqisoft.github.io/assets/example.docx',
            permissions: {
              chat: true,
              comment: true,
              copy: true,
              copyOut: true,
              download: true,
              edit: true,
              fillForms: true,
              modifyContentControl: true,
              modifyFilter: true,
              print: true,
              review: true,
              reviewGroups: null,
              commentGroups: {},
              userInfoGroups: null,
              protect: true,
            },
          },
          documentType: 'word',
          editorConfig: {
            callbackUrl: 'http://192.168.3.159:3000/api/callback',
            customization: {
              about: true,
              comments: true,
              close: { visible: false },
              feedback: false,
              forcesave: true,
              goback: { blank: false, url: 'https://moqisoft.github.io/' },
              help: false,
              submitForm: true,
              logo: {
                visible: false,
                imageEmbedded:
                  'https://moqisoft.github.io/assets/onlyoffice-logo.svg',
                image:
                  'https://moqisoft.github.io/assets/header-logo_s.svg',
                url: 'https://moqisoft.github.io/',
              },
              loaderLogo:
                'https://moqisoft.github.io/assets/onlyoffice-logo.svg',
              loaderName: '文档服务中国版',
              plugins: true,
              features: {
                spellcheck: false,
              },
              layout: {
                statusBar: {
                  actionStatus: false,
                  docLang: false,
                  textLang: false,
                },
              },
              font: {
                size: 12,
              },
              polling: true,
              waterMark: {
                value: '文档服务中国版\\nQQ群：183026419',
              },
              customer: {
                address: '技术交流QQ群：183026419',
                info: '专业提供功能定制服务，欢迎咨询',
                logo: 'https://moqisoft.github.io/assets/onlyoffice-logo.svg',
                mail: '327554929@qq.com',
                name: 'onlyoffice文档服务中国版',
                phone: '+86-010-12345678',
                www: 'https://moqisoft.github.io/',
              },
            },
            lang: 'zh',
            mode: 'edit',
            user: {
              group: '',
              id: '20250424',
              image: 'https://moqisoft.github.io/assets/avatar.png',
              name: 'moqisoft',
            },
          },
          height: '100%',
          token:
            'ew0KICAidHlwIjogIkpXVCIsDQogICJhbGciOiAiSFMyNTYiDQp9.ew0KICAiZG9jdW1lbnQiOiB7DQogICAgImZpbGVUeXBlIjogImRvY3giLA0KICAgICJrZXkiOiAiYXBpd2hlYzk3YjdmMi05ZjhiLTQ3ODUtYTY4YS00MzlkZTYyZTY3MGMiLA0KICAgICJwZXJtaXNzaW9ucyI6IHt9LA0KICAgICJ0aXRsZSI6ICJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLA0KICAgICJ1cmwiOiAiaHR0cHM6Ly9kMm5sY3RuMTJ2Mjc5bS5jbG91ZGZyb250Lm5ldC9hc3NldHMvZG9jcy9zYW1wbGVzL2RlbW8uZG9jeCINCiAgfSwNCiAgImRvY3VtZW50VHlwZSI6ICJ3b3JkIiwNCiAgImVkaXRvckNvbmZpZyI6IHsNCiAgICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly9hcGkub25seW9mZmljZS5jb20vZWRpdG9ycy9jYWxsYmFjayIsDQogICAgImN1c3RvbWl6YXRpb24iOiB7DQogICAgICAiYW5vbnltb3VzIjogew0KICAgICAgICAicmVxdWVzdCI6IGZhbHNlDQogICAgICB9DQogICAgfQ0KICB9LA0KICAiaGVpZ2h0IjogIjEwMCUiLA0KICAid2lkdGgiOiAiMTAwJSINCn0.pVqCERdbkcvbl6s8W-0k8QngLRCYNyhW0IB8i7JxWwk',
          width: '100%',
        }}
        events_onDocumentReady={onDocumentReady}
        onLoadComponentError={onLoadComponentError}
      />
    </>
  );
}

export default App;
