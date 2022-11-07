import React, { useState, useEffect } from "react";

import "./DataEntry.css";

const DataEntry_QUERY = `
{
  dataEntries {
    title
    content {
      text
    }
  }
}`;

function DataEntry() {
  const [dataEntry, setDataEntry] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: DataEntry_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setDataEntry(data.data.dataEntries));
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">UNOS PODATAKA</h1>
      <div>
        {dataEntry.map((d) => (
          <div key={d.title}>
            <h1 className="dataTitle">{d.title}</h1>
            <p className="dataText">{d.content.text}</p>
          </div>
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
}

export default DataEntry;
