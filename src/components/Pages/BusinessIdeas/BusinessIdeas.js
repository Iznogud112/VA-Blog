import React, { useState, useEffect } from "react";
import img from "../../../assets/images/VA.jpg";

import "./BusinessIdeas.css";

const BUSINESSIDEAS_QUERY = `
{
    biznisIdeas {
      title
      text {
        text
      }
    }    
}`;

function BussinesIdeas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: BUSINESSIDEAS_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setIdeas(data.data.biznisIdeas));
  }, []);

  return (
    <React.Fragment>
      <img className="ideasImg" src={img} alt="" />
      <div>
        {ideas.map((i) => (
          <div key={i.title}>
            <h1 className="ideasTitle">{i.title}</h1>
            <p className="ideasText">{i.text.text}</p>
          </div>
        ))}
      </div>
      <hr className="ideaHr" />
    </React.Fragment>
  );
}

export default BussinesIdeas;
