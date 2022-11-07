import React, { useState, useEffect } from "react";

import "./HumanResources.css";

const HUMANRESOURCES_QUERY = `
{
    humanRecourses {
      title
      text {
        text
      }
    }
}`;

function HumanResources() {
  const [hr, setHr] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: HUMANRESOURCES_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setHr(data.data.humanRecourses));
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">LJUDSKI RESURSI</h1>
      <div>
        {hr.map((h) => (
          <div key={h.title}>
            <h1 className="hrTitle">{h.title}</h1>
            <p className="hrText">{h.text.text}</p>
          </div>
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
}

export default HumanResources;
