import React from 'react'
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../UserDashboard/UserDashboard.css';
import { Layout, Menu, Progress, Row, Col, } from 'antd';
import { UserOutlined, StarOutlined, LogoutOutlined, SettingOutlined, TableOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled } from '@ant-design/icons';
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

const Sidebar = () => {
    return (
        <div>

            <Sidebar style={{ background: '#fff' }}>

                <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
                    <Menu.Item key='Dashboard' >
                        <SubMenu key="MenuBar" title="Menu Bar" />
                    </Menu.Item>

                    <SubMenu key="MyProfile" icon={<UserOutlined />} title="My Profile">
                        < Menu.Item key="ViewProfile">View Profile <Link to="/userprofilepage" /> </Menu.Item>
                    </SubMenu>

                    <SubMenu key="EcoCategories" icon={<TableOutlined />} title="Eco Categories">
                        <Menu.Item key="ViewCategories">All categories <Link to="/userdashboardpage" /> </Menu.Item>
                    </SubMenu>

                    <SubMenu key="Leaderboard" icon={<StarOutlined />} title="LeaderBoard">
                        <Menu.Item key="ViewLeaderboard">View Leaderboard <Redirect to="/leaderboardpage" /> </Menu.Item>
                    </SubMenu>

                    <SubMenu key="Settings" icon={<SettingOutlined />} title="Settings">
                        <Menu.Item key="AccountSettings">Account Settings</Menu.Item>
                    </SubMenu>

                    <SubMenu key="Logout" icon={<LogoutOutlined />} title="Logout">
                        <Menu.Item key="LogoutButton">Logout </Menu.Item>

                    </SubMenu>

                </Menu>
            </Sidebar>
        </div>
    )
}

export default Sidebar
