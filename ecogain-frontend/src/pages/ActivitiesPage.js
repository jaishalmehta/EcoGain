import { useEffect, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { useHistory } from 'react-router-dom'
import { Menu, Button, Layout } from "antd";
import Buttons from '../components/Button/Button'
import Title from 'antd/lib/typography/Title';
import { BrowserRouter as Router,  Redirect } from "react-router-dom";
import { UserOutlined, StarOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, SettingOutlined, TableOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled, SecurityScanTwoTone } from '@ant-design/icons';
import '../components/ActivitiesPage/Activities.css'
import SubMenu from 'antd/lib/menu/SubMenu';



const ActivitiesPage = (props) => {
    let category = props.match.params.category;
    const [activities, setActivities] = useState([])
    const [fetched, setFetched] = useState(false)
    const listOfActivities = []
    const history = useHistory()
    const { Header, Footer, Sider, Content } = Layout;



    useDeepCompareEffect(() => {
        const fetchFromAPI = async () => {
            const activitiesFromServer = await fetchActivity(category);
            console.log(activitiesFromServer.activities);
            // const activities = activitiesFromServer.activities;

            //activitiesFromServer.activities.forEach((activity) => {
            //    listOfActivities.push(activity)
            //})
            setActivities(activitiesFromServer.activities)
            if (activities.length > 0) {
                setFetched(true)
            }
            // console.log(listOfActivities)
            // console.log(activities)  jdhfsdkhjfjbdf
        };
        fetchFromAPI();
    }, [activities]);


    const fetchActivity = async (category) => {
        const res = await fetch(`http://localhost:5000/activities/${category}`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data)

        return data;
    }

    return (
        <div>
            {fetched ? <div className="site-layout-background" style={{ minHeight: 380 }}>
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

                            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}></Content>
                            <h2>{category}</h2>
                        
                            {activities.map((activity) =>
                                <div>
                                    <div>{activity.name}</div>
                                    <div>{activity.activity_points}</div>
                                    <Buttons style={{ width: '110px', height: '30px', align: 'center'}} id={activity.id} /> 
                                </div>)}
                                <div>
                                    <Button type='primary' style={{ width: '110px', height: '30px', align: 'center' }} onClick={() => history.push('/userdashboardpage')}>Go back</Button> 
                                </div>

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
                            <Menu.Item key="LogoutButton" onClick={() => { localStorage.removeItem('token'); history.push('/')}}>Logout </Menu.Item>

                        </SubMenu>

                        </Menu>
                    </Sider>
                </Layout>

                 </Router>
            </div>: 'loading'} 
              
        </div>

    )
}

export default ActivitiesPage