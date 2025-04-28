import serverConfig from '../../../config';

const documentTypeConfig = {
  word: {
    documentType: 'word',
    document: {
      fileType: 'docx',
      key: 'word123456789',
      title: '示例文档',
      url: 'https://moqisoft.github.io/assets/example.docx',
    },
  },
  cell: {
    documentType: 'cell',
    document: {
      fileType: 'xlsx',
      key: 'xlsx123456789',
      title: '示例表格',
      url: 'https://moqisoft.github.io/assets/example.xlsx',
    },
  },
  slide: {
    documentType: 'slide',
    document: {
      fileType: 'pptx',
      key: 'pptx123456789',
      title: '示例演示',
      url: 'https://moqisoft.github.io/assets/example.pptx',
    },
  },
};

const openConfig = {
  type: 'desktop',
  document: {
    ...documentTypeConfig['word']['document'],
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
    callbackUrl: `http://${serverConfig.host}:${serverConfig.apiPort}/api/callback`,
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
        imageEmbedded: 'https://moqisoft.github.io/assets/onlyoffice-logo.svg',
        image: 'https://moqisoft.github.io/assets/header-logo_s.svg',
        url: 'https://moqisoft.github.io/',
      },
      loaderLogo: 'https://moqisoft.github.io/assets/onlyoffice-logo.svg',
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
};

export { openConfig, documentTypeConfig };
