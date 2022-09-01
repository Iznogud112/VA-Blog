import React, { useState, useEffect } from "react";
import img from "../../assets/images/VA.jpg";

import "./About.css";

/* const ABOUT_QUERY = `
  {
    postsConnection {
      edges{
        node{
          author {
            biography
            id
            name
            picture {
              url
          }
        }
  }
        }
      }
}`; */

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
      //.then((data) => setAbout(data.data.postsConnection.edges));
      .then((data) => setAbout(data.data.authors));
  }, []);

  return (
    <React.Fragment>
      <img className="aboutImg" src={img} alt="" />
      <div className="about">
        {about.map((a) => (
          <div key={a.id}>
            <h1 className="aboutName">{a.name}</h1>
            <p className="aboutText">{a.biography}</p>
          </div>
        ))}
      </div>
      <hr className="aboutHr" />
    </React.Fragment>
  );
}
export default About;
