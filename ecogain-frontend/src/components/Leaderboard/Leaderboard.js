import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Leaderboard.css';
import { Layout, Menu, Table, Row, Col, } from 'antd';
import { UserOutlined, StarOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, SettingOutlined, TableOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import cutetrophy from '../Images/cutetrophy.gif';

const columns = [
    {
        title: 'Username',
        dataIndex: 'Username',
    },

    {
        title: 'Score',
        dataIndex: 'Score',
        sorter: {
            compare: (a, b) => a.Score - b.Score,
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        Username: 'John Brown',
        Score: 70,
    },
    {
        key: '2',
        Username: 'Jim Green',
        Score: 89,
    },
    {
        key: '3',
        Username: 'Joe Black',
        Score: 7,
    },
    {
        key: '4',
        Username: 'Jim Red',
        Score: 9,
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

const UserDashboard = () => {
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
                                    <div >

                                        <h1 style={{ color: '#ffc500', fontSize: '60px', paddingTop: '10px', fontWeight: 'bold' }}>Top Contributers</h1>

                                        <img className="podium" style={{
                                            width: "450px", height: '450px', flexDirection: 'row',
                                            alignItems: 'stretch'
                                        }} src={cutetrophy} alt="cutetrophy" />
                                    </div>

                                    <Table columns={columns} dataSource={data} onChange={onChange} />
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
    )
};



export default UserDashboard;



