import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './UserProfile.css';
import { useHistory } from 'react-router-dom';
import { Layout, Menu, Progress } from 'antd';
import { UserOutlined, StarOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, SettingOutlined, TableOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Footer, Sider, Content } = Layout;

const UserProfile = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const history = useHistory()

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
                                < Menu.Item key="ViewProfile" onClick={() => history.push('/userprofilepage')}>View Profile </Menu.Item>
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
                                <Menu.Item key="LogoutButton" onClick={() => history.push('/')}>Logout </Menu.Item>

                            </SubMenu>

                        </Menu>
                    </Sider>
                </Layout>
            </Router>
        </div >
    );
}


export default UserProfile;






