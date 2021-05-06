import { useEffect, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { useHistory } from 'react-router-dom'
import { Button, Form } from "antd";


const ActivitiesPage = (props) => {
    let category = props.match.params.category;
    const [activities, setActivities] = useState([])
    const [fetched, setFetched] = useState(false)
    const listOfActivities = []
    const history = useHistory()



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
            <Form>
                <Form.Item>
                    {fetched ? <div>
                        {activities.map((activity) =>
                            <div>
                                <div>{activity.name}</div>
                                <div>{activity.activity_points}</div>
                                <Button style={{ width: '110px', height: '30px', align: 'center' }} id={activity.id} />

                            </div>)}
                    </div> : 'loading'}
                    <Button style={{ width: '110px', height: '30px', align: 'center' }} onClick={() => history.push('/userdashboardpage')}>Go back</Button>
                </Form.Item>
            </Form>

        </div>




    )
}

export default ActivitiesPage