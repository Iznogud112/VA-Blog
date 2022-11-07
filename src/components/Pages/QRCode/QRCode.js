import React, { useState, useEffect } from "react";

import "./QRCode.css";

const QRCODE_QUERY = `
{
    qrCodes {
      title
      text {
        text
      }
    }   
}`;

function QRCode() {
  const [qrcode, setqrcode] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: QRCODE_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setqrcode(data.data.qrCodes));
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">QR CODE</h1>
      <div>
        {qrcode.map((q) => (
          <div key={q.title}>
            <h1 className="codeTitle">{q.title}</h1>
            <p className="codeText">{q.text.text}</p>
          </div>
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
}

export default QRCode;
