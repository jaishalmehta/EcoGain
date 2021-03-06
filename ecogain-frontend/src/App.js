import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboardPage from './pages/UserDashboardPage';
import UserProfilePage from './pages/UserProfilePage';
import LeaderBoardPage from './pages/LeaderBoardPage';
import ActivitiesPage from './pages/ActivitiesPage'

function App() {
  return (

    <div className="App">
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/registerpage" component={RegisterPage} />
        <Route path="/userdashboardpage" component={UserDashboardPage} />
        <Route path="/userprofilepage" component={UserProfilePage} />
        <Route path="/leaderboardpage" component={LeaderBoardPage} />
        <Route path="/activities/:category" component={ActivitiesPage} />
      </Switch>
    </div>
  );
}

export default App;