import React from 'react';
import './UserDashboard.css';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Footer, Sider, Content } = Layout;



function App() {
  return (
    <div className="App">
      <Layout>
        <Layout>
          <Header style={{ padding: 13 }}>
            <Title style={{ color: 'white' }} level={3}>EcoGain <Avatar style={{ backgroundColor: '#52BC3D', float: 'right' }} icon={<UserOutlined />} />
            </Title>
          </Header>

          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              Content
           </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>©2021 EcoGain Ltd.</Footer>
        </Layout>

        <Sider style={{ background: 'green' }}>
          <Menu>
            defaultSelectedKeys={['Dashboard']}
            mode="inline"
            <Menu.item key='Dashboard'>
              Dashboard
            </Menu.item>
            <SubMenu title={
              <span>
                <MenuOutlined />
                <span>About us</span>
              </span>
            }>
              <Menu.ItemGroup key='AboutUs' title='Country 1'>
                <Menu.Item key='Location1'> Location 1</Menu.Item>
                <Menu.Item key='Location2'> Location 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>

      </Layout>
    </div >
  );
}

export default App;



