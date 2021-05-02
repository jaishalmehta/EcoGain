import React from 'react';
import './UserDashboard.css';
import { Layout, Avatar, Menu, Progress, Row, Col, Popover } from 'antd';
import { UserOutlined, MenuOutlined, MenuUnfoldOutlined, MenuFoldOutlined, MailOutlined, SettingOutlined, AppstoreOutlined, StarTwoTone } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import transportation from '../Images/transportation.svg';
import harvest from '../Images/harvest.svg';
import animals from '../Images/animals.svg';
import energy from '../Images/energy.svg';
import other from '../Images/other.svg';
import plants from '../Images/plants.svg';
import recycle from '../Images/recycle.svg';
import reduce from '../Images/reduce.svg';
import tshirt from '../Images/tshirt.svg';
import reuse from '../Images/reuse.svg';
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Layout>
            <Header className="site-layout-background" style={{ padding: 9, backgroundColor: '#449BCD' }} >

              <Title style={{ color: 'white' }} level={2}>
                <h1 style={{ color: 'white', alignItems: "center" }}>
                  EcoGain
                   {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle
                })}</h1>
              </Title>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>


              <div className="site-layout-background" style={{ minHeight: 380 }}>
                <div>
                  <StarTwoTone spin style={{ float: 'left', fontSize: '30px' }} /> <Progress percent={55} status="active" />
                </div>
                <div>
                  <Row justify="space-around" className="row">
                    <Col span={4} ><img src={transportation} alt="transportation" /></Col>
                    <Col span={4} ><img src={harvest} alt="harvest" /></Col>
                    <Col span={4} ><img src={animals} alt="animals" /></Col>
                    <Col span={4} ><img src={tshirt} alt="tshirt" /></Col>
                  </Row>

                  <Row justify="space-around" className="row">
                    <Col className="row" span={4} ><img src={reduce} alt="reduce" /></Col>
                    <Col span={4} ><img src={reuse} alt="reuse" /></Col>
                    <Col span={4} ><img src={recycle} alt="recycle" /></Col>
                    <Col span={4} ><img src={energy} alt="energy" /></Col>

                  </Row>

                  <Row justify="space-around" className="row">
                    <Col span={4} ><img src={plants} alt="plants" /></Col>
                    <Col span={4} ><img src={other} alt="other" /></Col>
                    <Col span={4} ></Col>
                    <Col span={4} ></Col>

                  </Row>
                </div>
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>©2021 EcoGain Ltd.</Footer>
          </Layout>

          <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ background: '#fff' }}>
            <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
              <Menu.Item key='Dashboard'>
                Categories
              <Avatar style={{ backgroundColor: '#52BC3D', float: 'right' }} icon={<UserOutlined />} />
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>

              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

        </Layout>
      </div >
    );
  }
}

export default App;



