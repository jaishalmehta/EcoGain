import { useEffect, useState } from 'react'

const ActivitiesPage = (props) => {
    let category = props.match.params.category;
    const [activities, setActivities] = useState([])
    // const [fetched, setFetched] = useState(false)
    const listOfActivities = []

    
    
    useEffect(() => {
        const fetchFromAPI = async () => {
            const activitiesFromServer = await fetchActivity(category);
            console.log(activitiesFromServer.activities); 
            // const activities = activitiesFromServer.activities;
           
            activitiesFromServer.activities.forEach((activity) => {
                listOfActivities.push(activity)
            })
            setActivities(listOfActivities)
            console.log(listOfActivities)
            console.log(activities)
    };
    fetchFromAPI();
    }, []);

        
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
        
        <div className="activities-list">
            {activities.map((activity) => {
                <div key={activity.id} className="activity">
                    <h4 value={activity.name} />
                </div> 
            })}
        </div>
        
        
    )
}

export default ActivitiesPage
