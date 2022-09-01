import React, { useState, useEffect } from "react";
import img from "../../../assets/images/VA.jpg";

import "./TeamBuilding.css";

const TEAMBUILDING_QUERY = `
{
        teamBuildings {
          title
          text {
            text
          }
        }
}`;

function TeamBuilding() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: TEAMBUILDING_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setSocial(data.data.teamBuildings));
  }, []);

  return (
    <React.Fragment>
      <img className="teamImg" src={img} alt="" />
      <div>
        {social.map((t) => (
          <div key={t.title}>
            <h1 className="teamTitle">{t.title}</h1>
            <p className="teamText">{t.text.text}</p>
          </div>
        ))}
      </div>
      <hr className="teamHr" />
    </React.Fragment>
  );
}

export default TeamBuilding;
