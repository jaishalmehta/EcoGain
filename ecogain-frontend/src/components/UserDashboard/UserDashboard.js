import React from 'react';
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './UserDashboard.css';
import { Layout, Menu, Progress, Row, Col, Modal } from 'antd';
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


const UserDashboard = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const history = useHistory()

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

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
                    <button onClick={showModal} className="IconBtn"> <Col span={3} > <img src={transportation} alt="transportation" onClick={() => history.push('/activities/transport')} /> </Col> </button>
                    <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
                      <p>{modalText}</p>
                    </Modal>
                    <button onClick={showModal} className="IconBtn"> <Col span={3} > <img src={harvest} alt="harvest" onClick={() => history.push('/activities/food')} /> </Col> </button>
                    <button onClick={showModal} className="IconBtn"> <Col span={3} > <img src={animals} alt="animals" onClick={() => history.push('/activities/food')} /> </Col> </button>
                  </Row>

                  <Row justify="space-around" className="Row">
                    <button onClick={showModal} className="IconBtn"> <Col span={3} > <img src={tshirt} alt="tshirt" onClick={() => history.push('/activities/clothing')} /> </Col> </button>
                    <button onClick={showModal} className="IconBtn"> <Col span={3}> <img src={reduce} alt="reduce" onClick={() => history.push('/activities/reuse')} /> </Col> </button>
                    <button onClick={showModal} className="IconBtn"> <Col span={3}> <img src={recycle} alt="recycle" onClick={() => history.push('/activities/recycle')} /> </Col> </button>
                  </Row>

                  <Row justify="space-around" className="Row">
                    <button onClick={showModal} className="IconBtn"> <Col span={3}> <img src={energy} alt="energy" onClick={() => history.push('/activities/energy')} /> </Col> </button>
                    <button onClick={showModal} className="IconBtn"> <Col span={3}> <img src={plants} alt="plants" /> </Col> </button>
                    <button onClick={showModal} className="IconBtn"> <Col span={3}> <img src={other} alt="other" /> </Col> </button>
                  </Row>



                </div>
              </div>
            </Content>

            <Footer style={{ textAlign: 'center', color: '#808080', fontSize: '20px' }}>©2021 EcoGain Ltd. <br /> <LinkedinFilled /> <FacebookFilled /> <InstagramFilled /> <AndroidFilled /> <AppleFilled /> <WindowsFilled /> </Footer>
          </Layout>

          <Sider style={{ background: '#fff' }}>

            <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
              <Menu.Item key='Dashboard' >
                <SubMenu key="MenuBar" title="Menu Bar" />
              </Menu.Item>

              <SubMenu key="MyProfile" icon={<UserOutlined />} title="My Profile">
                < Menu.Item key="ViewProfile" onClick={() => history.push('/userprofilepage')} >Profile </Menu.Item>
              </SubMenu>

              <SubMenu key="EcoCategories" icon={<TableOutlined />} title="Eco Categories">
                <Menu.Item key="ViewCategories" onClick={() => history.push('/userdashboardpage')}>All categories </Menu.Item>
              </SubMenu>

              <SubMenu key="Leaderboard" icon={<StarOutlined />} title="LeaderBoard">
                <Menu.Item key="ViewLeaderboard" onClick={() => history.push('/leaderboardpage')}>View Leaderboard </Menu.Item>
              </SubMenu>

              <SubMenu key="Settings" icon={<SettingOutlined />} title="Settings">
                <Menu.Item key="AccountSettings">Account Settings</Menu.Item>
              </SubMenu>

              <SubMenu key="Logout" icon={<LogoutOutlined />} title="Logout">
                <Menu.Item key="LogoutButton" onClick={() => { localStorage.removeItem('token'); history.push('/') }}>Logout </Menu.Item>

              </SubMenu>

            </Menu>
          </Sider>
        </Layout>
      </Router>
    </div >
  )
};



export default UserDashboard;



