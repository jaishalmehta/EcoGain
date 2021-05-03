import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Leaderboard.css';
import { Layout, Menu, Table } from 'antd';
import { UserOutlined, StarOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, SettingOutlined, TableOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Footer, Sider, Content } = Layout;


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
                                        <h1 style={{ color: '#449BCD', fontSize: '30px', textAlign: 'center' }}>Top Contributers</h1>
                                        <Table columns={columns} dataSource={data} onChange={onChange} />
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



