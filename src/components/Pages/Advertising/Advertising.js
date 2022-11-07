import React, { useState, useEffect } from "react";

import "./Advertising.css";

const ADVERTISING_QUERY = `
{
    advertisings {
      title
      text {
        text
      }
    }
}`;

function Advertising() {
  const [advertising, setAdvertising] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: ADVERTISING_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setAdvertising(data.data.advertisings));
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">OGRAŠAVANJE</h1>
      <div>
        {advertising.map((a) => (
          <div key={a.title}>
            <h1 className="advTitle">{a.title}</h1>
            <p className="advText">{a.text.text}</p>
          </div>
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Advertising;
