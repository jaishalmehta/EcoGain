import { useEffect, useState } from 'react'

const ActivitiesPage = (props) => {
    let category = props.match.params.category;
    const [activities, setActivities] = useState([])
    const [fetched, setFetched] = useState(false)
    const listOfActivities = []

    
    
    useEffect(() => {
        const fetchFromAPI = async () => {
            const activitiesFromServer = await fetchActivity(category);
            console.log(activitiesFromServer.activities); 
            // const activities = activitiesFromServer.activities;
           
            //activitiesFromServer.activities.forEach((activity) => {
            //    listOfActivities.push(activity)
            //})
            setActivities(activitiesFromServer.activities)
            console.log(activities)
            if (activities.length > 0) {
                console.log(activities)
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
            {fetched ? <div>
                {activities.map((activity) => <div>{activity.name}</div>)}
            </div> : 'loading'}
        </div>
 
        
        
        
    )
}

export default ActivitiesPage
