import React, { useState, useEffect } from "react";
import img from "../../../assets/images/VA.jpg";

import "./TextForSite.css";

const TEXTFROSITE_QUERY = `
{
    textForSites {
      title
      text {
        text
      }
    }
}`;

function TextForSite() {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: TEXTFROSITE_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setText(data.data.textForSites));
  }, []);

  return (
    <React.Fragment>
      <img className="textImg" src={img} alt="" />
      <div>
        {text.map((t) => (
          <div key={t.title}>
            <h1 className="textTitle">{t.title}</h1>
            <p className="textText">{t.text.text}</p>
          </div>
        ))}
      </div>
      <hr className="textHr" />
    </React.Fragment>
  );
}

export default TextForSite;
