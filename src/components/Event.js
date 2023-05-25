import React, { useState, useEffect} from "react";

function EventList({ pageId }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`https://graph.facebook.com/${pageId}/events?access_token=${process.env.FB_ACCESS_TOKEN}`);
        const data = await response.json();
        setEvents(data.data);
    };
    fetchData();
}, [pageId]);

return (
    <div>
        <h2>Upcoming Events</h2>
        {events.map((event) => (
            <h3></h3>
        ))}
    </div>
)

}