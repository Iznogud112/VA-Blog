import React, { useState, useEffect } from "react";

import "./EventsOrganization.css";

const EVENTSORGANIZATION_QUERY = `
{
    eventOrganizations {
      title
      text {
        text
      }
    }
}`;

function EventsOrganization() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: EVENTSORGANIZATION_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setEvents(data.data.eventOrganizations));
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">ORGANIZACIJA DOGAĐAJA</h1>
      <div>
        {events.map((e) => (
          <div key={e.title}>
            <h1 className="eventTitle">{e.title}</h1>
            <p className="eventText">{e.text.text}</p>
          </div>
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
}

export default EventsOrganization;
