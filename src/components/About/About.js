import React, { useState, useEffect } from "react";

import "./About.css";

const ABOUT_QUERY = ` {
  authors {
    id
    name
    picture {
      url
    }
    biography
  }
}`;

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: ABOUT_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setAbout(data.data.authors));
  }, []);

  return (
    <React.Fragment>
      {/* <img className="aboutImg" src={img} alt="" /> */}
      <h1 className="title">KO SMO MI</h1>
      <div className="about">
        {about.map((a) => (
          <div key={a.id}>
            <h1 className="aboutName">{a.name}</h1>
            <p className="aboutText">{a.biography}</p>
          </div>
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
}
export default About;
