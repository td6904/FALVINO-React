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



}