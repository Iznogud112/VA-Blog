import React, { useState, useEffect } from "react";

import "./SocialMedia.css";

const SOCIALMEDIA_QUERY = `
{
    socialMedias {
      title
      text {
        text
      }
    }
}`;

function SocialMedia() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: SOCIALMEDIA_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setSocial(data.data.socialMedias));
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">DRUŠTVENE MREŽE</h1>
      <div>
        {social.map((s) => (
          <div key={s.title}>
            <h1 className="smTitle">{s.title}</h1>
            <p className="smText">{s.text.text}</p>
          </div>
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
}

export default SocialMedia;
