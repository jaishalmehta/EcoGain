import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './UserDashboard.css';
import { Layout, Menu, Progress, Row, Col, } from 'antd';
import { UserOutlined, StarOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, SettingOutlined, TableOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled } from '@ant-design/icons';
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
//The Below is the dropdown code for the icons
// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item
//       </a>
//     </Menu.Item>
//   </Menu>
// );

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
        <Router>
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

                    <Row justify="space-around" className="Row">
                      <button className="IconBtn"> <Col span={3} > <img src={transportation} alt="transportation" /> </Col> </button>
                      <button className="IconBtn"> <Col span={3} > <img src={harvest} alt="harvest" /> </Col> </button>
                      <button className="IconBtn"> <Col span={3} > <img src={animals} alt="animals" /> </Col> </button>
                    </Row>

                    <Row justify="space-around" className="Row">
                      <button className="IconBtn"> <Col span={3} > <img src={tshirt} alt="tshirt" /> </Col> </button>
                      <button className="IconBtn"> <Col span={3}> <img src={reduce} alt="reduce" /> </Col> </button>
                      <button className="IconBtn"> <Col span={3}> <img src={reuse} alt="reuse" /> </Col> </button>
                    </Row>

                    <Row justify="space-around" className="Row">
                      <button className="IconBtn"> <Col span={3}> <img src={recycle} alt="recycle" /> </Col> </button>
                      <button className="IconBtn"> <Col span={3}> <img src={energy} alt="energy" /> </Col> </button>
                      <button className="IconBtn"> <Col span={3}> <img src={plants} alt="plants" /> </Col> </button>
                    </Row>

                    <Row justify="space-around" className="Row">
                      <button className="IconBtn"> <Col span={3}> <img src={other} alt="other" /> </Col> </button>
                      <Col span={3} ></Col>
                      <Col span={3} ></Col>
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
                  <SubMenu key="MenuBar" title="Menu Bar" />
                </Menu.Item>

                <SubMenu key="MyProfile" icon={<UserOutlined />} title="My Profile">
                  < Menu.Item key="ViewProfile">View Profile <Link to="/userprofilepage" /> </Menu.Item>
                </SubMenu>

                <SubMenu key="EcoCategories" icon={<TableOutlined />} title="Eco Categories">
                  <Menu.Item key="ViewCategories">All categories <Link to="/userdashboardpage" /> </Menu.Item>
                </SubMenu>

                <SubMenu key="Leaderboard" icon={<StarOutlined />} title="LeaderBoard">
                  <Menu.Item key="ViewLeaderboard">View Leaderboard <Link to="/leaderboardpage" /> </Menu.Item>
                </SubMenu>

                <SubMenu key="Settings" icon={<SettingOutlined />} title="Settings">
                  <Menu.Item key="AccountSettings">Account Settings</Menu.Item>
                </SubMenu>

                <SubMenu key="Logout" icon={<LogoutOutlined />} title="Logout">
                  <Menu.Item key="LogoutButton">Logout <Link to="/" /> </Menu.Item>
                </SubMenu>

              </Menu>
            </Sider>
          </Layout>
        </Router>
      </div >
    );
  }
}

export default App;



