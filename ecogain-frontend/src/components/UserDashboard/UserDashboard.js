import React from 'react';
import './UserDashboard.css';
import { Layout, Avatar, Menu, Progress, Row, Col, Dropdown, Button } from 'antd';
import { MenuOutlined, MenuUnfoldOutlined, MenuFoldOutlined, MailOutlined, SettingOutlined, AppstoreOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled } from '@ant-design/icons';
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
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

// myfunction() {
//   console.log("CLICKED");
// }

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
                </h1>
              </Title>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

              <div className="site-layout-background" style={{ minHeight: 380 }}>
                <div >
                  <StarTwoTone spin style={{ float: 'left', fontSize: '30px' }} /> <Progress percent={55} status="active" />
                </div>
                <div>

                  <Row justify="space-around" className="row">
                    <button className="IconBtn"> <Col span={4} > <img src={transportation} alt="transportation" /> </Col> </button>
                    <button className="IconBtn"> <Col span={4} > <img src={harvest} alt="harvest" /> </Col> </button>
                    <button className="IconBtn"> <Col span={4} > <img src={animals} alt="animals" /> </Col> </button>
                    <button className="IconBtn"> <Col span={4} > <img src={tshirt} alt="tshirt" /> </Col> </button>
                  </Row>

                  <Row justify="space-around" className="row">
                    <button className="IconBtn"> <Col span={4}> <img src={reduce} alt="reduce" /> </Col> </button>
                    <button className="IconBtn"> <Col span={4}> <img src={reuse} alt="reuse" /> </Col> </button>
                    <button className="IconBtn"> <Col span={4}> <img src={recycle} alt="recycle" /> </Col> </button>
                    <button className="IconBtn"> <Col span={4}> <img src={energy} alt="energy" /> </Col> </button>
                  </Row>

                  <Row justify="space-around" className="row">
                    <button className="IconBtn"> <Col span={4}> <img src={plants} alt="plants" /> </Col> </button>
                    <button className="IconBtn"> <Col span={4}> <img src={other} alt="other" /> </Col> </button>
                    <Col span={4} ></Col>
                    <Col span={4} ></Col>
                  </Row>

                </div>
              </div>
            </Content>

            <Footer style={{ textAlign: 'center', color: '#808080', fontSize: '20px' }}>©2021 EcoGain Ltd. <br /> <LinkedinFilled /> <FacebookFilled /> <InstagramFilled /> <AndroidFilled /> <AppleFilled /> <WindowsFilled /> </Footer>
          </Layout>

          <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ background: '#fff' }}>

            <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
              <Menu.Item key='Dashboard' >
                {React.createElement(this.state.collapsed ? MenuFoldOutlined : MenuUnfoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle
                })}
                <SubMenu key="sub1" icon={<MailOutlined />} title="Menu Bar" />
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>

              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
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


