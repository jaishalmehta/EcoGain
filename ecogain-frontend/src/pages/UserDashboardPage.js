import React from 'react'
import {useAuth, logout} from "../auth"
import { useHistory } from 'react-router-dom'

const UserDashboardPage = () => {

    const history = useHistory()
    
    const logged = useAuth();


    return (
        <div>
            user dashboard page
            {logged ? (
            <button onClick={() => {
                logout();
                history.push('/');
            }}>
            Logout
            </button>
            ) : (
                history.push('/')
            )}
        </div>
    )

}

export default UserDashboardPage
