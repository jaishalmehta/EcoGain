import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './UserProfile.css';
import Buttons from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';
import { Layout, Menu, Progress } from 'antd';
import { Radio, Input, Space } from 'antd';
import { UserOutlined, StarOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, SettingOutlined, TableOutlined, StarTwoTone, LinkedinFilled, FacebookFilled, InstagramFilled, AndroidFilled, AppleFilled, WindowsFilled, CheckCircleTwoTone, CrownTwoTone, TrophyTwoTone } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useState, useEffect } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect';
import Earth from '../Images/Earth.png';

const { Header, Footer, Sider, Content } = Layout;

const UserProfile = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const history = useHistory()

    const [user, setUser ] = useState({})
    const [fetched, setFetched] = useState(false)
    const [userPoints, setUserPoints] = useState()
    const [money, setMoney] = useState()

    const [wantsToDonate, setWantsToDonate] = useState(false)
    const [chosenCharity, setChosenCharity] = useState('')
    const [thankYouMessage, setThankYouMessage] = useState('')

    const [wantsToRedeem, setWantsToRedeem] = useState(false)
    const [chosenVoucher, setChosenVoucher] = useState('')
    const [enjoyVoucher, setEnjoyVoucher] = useState('')

    useDeepCompareEffect(() => {
        const fetchFromAPI = async () => {
          const token = localStorage.getItem('token')
          const userFromServer = await fetchUser(token);

          setUser(userFromServer);
          
          if (user) {
            setUserPoints(user.total_points)
            
            const moneyToSpend = (user.total_points/100).toFixed(2)
            setMoney(moneyToSpend)
            setFetched(true)
            
            console.log(userPoints)
            console.log(money) //
          }
          
    };
        fetchFromAPI();
  }, [user]);

  // write fetchTask func
  const fetchUser = async (token) => {
    const res = await fetch('http://localhost:5000/current_user', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       "x-access-token": token,
      },
    });
    const data = await res.json();
    console.log(data)
    return data;
  };

  const confirmsToDonation = () => {
        setWantsToDonate(false)
        setMoney(0)
        setUserPoints(0)
        setThankYouMessage('Thank you for your donation!')
  }

  const confirmsVoucher = () => {
        setWantsToRedeem(false)
        setMoney(0)
        setUserPoints(0)
        setEnjoyVoucher('Enjoy your gift voucher!')
  }

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
                                <div className="title">My Profile</div>
                                <div className="earth-icon"><img src={Earth}/></div>
                    
                                {fetched ? <>   <div className = "name" >{user.name}</div> 
                                                <div className = "username">{user.username}</div>
                                                <div className = "points"><CheckCircleTwoTone twoToneColor="#52c41a" />     {userPoints}</div> </> : 'loading profile'} 

                                {fetched ? <div className="container-levels-rewards">
                                                <div className="level-display">
                                                    <div className="level-section-title">Check Your Level!</div>
                                                    <div className="individual-level">
                                                        <div className="level-title"><CrownTwoTone spin style={{fontSize:'30px'}}twoToneColor="#f7eb09" />         Level 1 - Casually Environmental</div>
                                                        {userPoints >= 100 ? <div className='achieved'>Achieved    <TrophyTwoTone twoToneColor="#ffc500" /></div> : <div className="level-points" >100    <CheckCircleTwoTone twoToneColor="#52c41a" /></div>}
                                                    </div>
                                                    <div className="individual-level">
                                                        <div className="level-title"><CrownTwoTone spin style={{fontSize:'30px'}}twoToneColor="#f7eb09" />         Level 2 - Green Bean</div>
                                                        {userPoints >= 200 ? <div className='achieved'>Achieved    <TrophyTwoTone twoToneColor="#ffc500" /></div> : <div className="level-points" >200    <CheckCircleTwoTone twoToneColor="#52c41a" /></div>}
                                                    </div>
                                                    <div className="individual-level">
                                                        <div className="level-title"><CrownTwoTone spin style={{fontSize:'30px'}}twoToneColor="#f7eb09" />         Level 3 - Eco Activist</div>
                                                        {userPoints >= 500 ? <div className='achieved'>Achieved    <TrophyTwoTone twoToneColor="#ffc500" /></div> : <div className="level-points" >500    <CheckCircleTwoTone twoToneColor="#52c41a" /></div>}
                                                    </div>
                                                    <div className="individual-level">
                                                        <div className="level-title"><CrownTwoTone spin style={{fontSize:'30px'}}twoToneColor="#f7eb09" />         Level 4 - Eco Warrior</div>
                                                        {userPoints >= 1000 ? <div className='achieved'>Achieved    <TrophyTwoTone twoToneColor="#ffc500" /></div> : <div className="level-points" >1000    <CheckCircleTwoTone twoToneColor="#52c41a" /></div>}
                                                    </div>
                                                </div>
                                                <div className="rewards">
                                                    <div className ="rewards-title">Redeem Your Rewards!</div>
                                                    {money == 0 ? <> <div className = "money-displayed">You have ??0.00 to redeem.</div>
                                                    <div>Complete some sustainable activities to earn points!</div> </>
                                                    : <> <div className = "money-displayed">You have ??{money} to redeem.</div>
                                                     </>
                                                    }
                                                    {money == 0 ? '' :
                                                    <> <div className = "reward-section" >
                                                        <button className = "redeem-options" onClick={()=> setWantsToDonate(true)}>Donate to Charity</button>
                                                        {wantsToDonate ?     <div>  <Radio.Group className ="radio" onChange={(e)=>setChosenCharity(e.target.value)} value={chosenCharity}>
                                                                                    <Space direction="vertical">
                                                                                    <Radio value={1}>Rainforest Alliance</Radio>
                                                                                    <Radio value={2}>Greenpeace Environmental Trust</Radio>
                                                                                    <Radio value={3}>WWF</Radio>
                                                                                    </Space>
                                                                                </Radio.Group> 
                                                                                <div><button className = "confirm-charity" onClick ={confirmsToDonation}>Confirm Charity</button></div>
                                                                            </div> :'' } 
                                                    </div>
                                                    <div><button className = "redeem-options" onClick={() => setWantsToRedeem(true)}>Redeem as Gift Voucher</button>
                                                    {wantsToRedeem ? <div>  <Radio.Group className ="radio" onChange={(e)=>setChosenVoucher(e.target.value)} value={chosenVoucher}>
                                                                                    <Space direction="vertical">
                                                                                    <Radio value={1}>Loop</Radio>
                                                                                    <Radio value={2}>Ocean Bottle</Radio>
                                                                                    <Radio value={3}>Sustainable Jungle</Radio>
                                                                                    </Space>
                                                                                </Radio.Group> 
                                                                                <div><button className = "confirm-voucher" onClick ={confirmsVoucher}>Confirm Voucher</button></div>
                                                                            </div> :'' }
                                                    </div> 
                                                    </> }
                                                    <div>{thankYouMessage}</div>
                                                    <div>{enjoyVoucher}</div>
                                                </div>
                                            </div> : ''}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center', color: '#808080', fontSize: '20px' }}>??2021 EcoGain Ltd. <br /> <LinkedinFilled /> <FacebookFilled /> <InstagramFilled /> <AndroidFilled /> <AppleFilled /> <WindowsFilled /> </Footer>
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
                                <Menu.Item key="LogoutButton" onClick={() => { localStorage.removeItem('token'); history.push('/')}}>Logout </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                </Layout>
            </Router>
        </div >
    );
}

export default UserProfile;






