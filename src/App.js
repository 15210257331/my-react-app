import React, { useState } from 'react';
import logo from './logo.svg';
import Home from './pages/home.js'
// import { Button,Modal } from 'antd';
import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: '导航一',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: '导航二',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: '导航三',
    },
  ]
  return (
    <Layout style={{height: '100%'}}>
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
         <Home/>
        </Content>
      </Layout>
    </Layout>
  );
};


export default App;
