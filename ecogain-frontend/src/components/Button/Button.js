import React from 'react'

const Button = (id) => {

    const addPointsToUser = async (activityPoints) => {
        
        const token = localStorage.getItem('token')
        console.log(token)
        console.log('activity points to add' + activityPoints)
        const dataForRequest = {activity_points : activityPoints}
        const res = await fetch(`http://localhost:5000/current_user/points`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-access-token" : token,
            },
            body: 
                JSON.stringify(dataForRequest),
            
        });
        const data = await res.json();
        console.log(data);
    } 

    const handleActivityCompletion = async (id) => {
        let activity_id = id.id;
        const res = await fetch(`http://localhost:5000/activities/${activity_id}`, { 
            method: "GET", 
            headers : {
                "Content-Type": "application/json",
            }});
        const data = await res.json();
        // we need to add these activity points to the current users total points
        let activityPoints = (data.activity_points)
        console.log(activityPoints)
        addPointsToUser(activityPoints)
    }



    return (
        <button onClick={() => handleActivityCompletion(id)}>Completed</button>
    )
}

export default Button
