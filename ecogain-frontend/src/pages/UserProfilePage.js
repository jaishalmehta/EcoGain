import React from 'react';
import UserProfile from '../components/UserProfile/UserProfile'
import { useState, useEffect } from 'react'


const UserProfilePage = () => {
  /*
    const [user, setUser ] = useState({})
    const [fetched, setFetched] = useState(false)
    

    useEffect(() => {
        const fetchFromAPI = async () => {
          const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjIwMTY2NDEwfQ.2u254FdrOfCsebwWkiJasyD38VHckD8kG-rqqhRJsl8'
          const userFromServer = await fetchUser(token);

          setUser(userFromServer);
          if (user.user ) {
            console.log(user.user)
            console.log(user.user.name)
            setFetched(true)
          }
          
    };
        fetchFromAPI();
  }, []);

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
  }; */
    
    return (
      
        <div>
            <UserProfile />

           
        </div> 
     
        
    )
}

export default UserProfilePage;
