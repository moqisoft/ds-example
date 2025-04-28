// Uncomment this line to use CSS modules
import styles from './app.module.scss';
import { Tabs } from 'antd';
import { Splitter } from 'antd';
import type { TabsProps } from 'antd';
import Editor from '../components/editor';
import Options from '../components/options';

function Framework(props: any) {
  const documentType = props.documentType;
  console.log('Framework documentType', documentType);
  return (
    <Splitter style={{ height: 800 }}>
      <Splitter.Panel defaultSize="25%" min="20%" max="50%">
        <Options documentType={documentType} />
      </Splitter.Panel>
      <Splitter.Panel>
        <Editor documentType={documentType} />
      </Splitter.Panel>
    </Splitter>
  );
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Word 示例',
    children: <Framework documentType="word" />,
    destroyInactiveTabPane: true,
  },
  {
    key: '2',
    label: 'Cell 示例',
    children: <Framework documentType="cell" />,
    destroyInactiveTabPane: true,
  },
  {
    key: '3',
    label: 'Slide 示例',
    children: <Framework documentType="slide" />,
    destroyInactiveTabPane: true,
  },
];

const onTabClick = (e) => {
  console.log(e);
};
export function App() {
  return (
    <div className={styles.outer}>
      <h1>文档服务中国版集成示例 - React</h1>
      <Tabs
        defaultActiveKey="1"
        size="large"
        onTabClick={onTabClick}
        items={items}
      />
    </div>
  );
}

export default App;
