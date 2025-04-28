import {
  Button,
  Flex,
  Form,
  Radio,
  Checkbox,
  Input,
  Divider,
  Typography,
} from 'antd';
import type { FormProps } from 'antd';
import type { CheckboxProps } from 'antd';
import { useState } from 'react';
const { Title } = Typography;
const { TextArea } = Input;

import eventBus from './event';

type FieldType = {
  type?: string;
  permissions?: string[];
  waterMark?: string;
};

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

function Options(props: { documentType: string }) {
  const documentType = props.documentType;
  const [type, setType] = useState<string>('desktop');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [permissionList, setPermissionList] = useState<string[]>(
    defaultPermissionList
  );
  const [content, setContent] = useState<string>('文档服务中国版');

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    eventBus.emit('reopen', {
      formData: values,
      documentType,
    });
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  const onPermissionChange = (list: string[]) => {
    setPermissionList(list);
  };

  const onTypeChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    setIsDisabled(value !== 'desktop');
  };

  // 连接器测试插入内容
  const insertContent = () => {
    const instances = window.DocEditor.instances[`editor_${documentType}`];
    const connector = instances.createConnector();

    Asc.scope.value = content;

    switch (documentType) {
      case 'word':
        connector.callCommand(
          function () {
            var oDocument = Api.GetDocument();
            var oParagraph = Api.CreateParagraph();
            oParagraph.AddText(Asc.scope.value);
            oDocument.InsertContent([oParagraph]);
            return true;
          },
          function (returnVaule: any) {
            console.log('返回结果 => ', returnVaule);
          }
        );
        break;
      case 'cell':
        connector.callCommand(
          function () {
            Api.GetActiveSheet().GetRange('A1:A1').SetValue(Asc.scope.value);
            return true;
          },
          function (returnVaule: any) {
            console.log('返回结果 => ', returnVaule);
          }
        );
        break;
      case 'slide':
        connector.executeMethod ("PasteText", [Asc.scope.value]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Form
        name={`basic_${documentType}`}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          type: 'desktop',
          permissions: defaultPermissionList,
          waterMark: '文档服务中国版\\nQQ群：183026419',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="模式" name="type">
          <Radio.Group value={type} onChange={onTypeChange}>
            <Radio.Button value="desktop">desktop</Radio.Button>
            <Radio.Button value="embedded">embedded</Radio.Button>
            <Radio.Button value="mobile">mobile</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item<FieldType> label="权限" name="permissions">
          <Checkbox.Group
            options={defaultPermissionList}
            value={permissionList}
            onChange={onPermissionChange}
          />
        </Form.Item>
        <Form.Item<FieldType> label="水印" name="waterMark">
          <Input placeholder="水印内容" />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            重新开档
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      <Title level={4}>连接器测试</Title>
      <Title level={5}>插入内容</Title>
      <Form
        name={`basic_${documentType}_test`}
        autoComplete="off"
        disabled={isDisabled}
      >
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="请输入内容"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <Button type="primary" onClick={insertContent}>
          插入内容
        </Button>
      </Form>
    </>
  );
}

export default Options;
