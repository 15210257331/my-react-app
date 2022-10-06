import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesConfig from './routes/index'
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content, Footer } = Layout;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: <Link to="/home">主页</Link>,
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: <Link to="/echarts">地图</Link>,
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: <Link to="/fly">飞行图</Link>
    },
  ]
  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img className="logo-icon" alt='' src={logo} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <RoutesConfig />
        </Content>
        <Footer style={{textAlign: 'center'}}>
          <a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn/">京ICP备19012558号-2</a></Footer>
      </Layout>
    </Layout>
  );
};

export default App;
