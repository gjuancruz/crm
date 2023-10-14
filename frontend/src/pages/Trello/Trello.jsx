import Tasks from "./Tasks.jsx";
import { ProjectOutlined } from "@ant-design/icons";
import { tasks, columns } from "./data/FakeData.js";
import { Layout } from 'antd';
import './styles.css'
const { Content } = Layout;
export default function Trello() {
  return (
    <Layout className="site-layout">
        <Content
          className="whiteBox shadow layoutPadding"
          style={{
            margin: '100px auto',
            width: '100%',
            maxWidth: '1100px',
            minHeight: '600px',
          }}
        >
          
    <div className="app">
      <div className="header">
        <ProjectOutlined /> Kanban board
      </div>

      <Tasks tasks={tasks} columns={columns} />

    </div>
        </Content>
      </Layout>
  );
}
