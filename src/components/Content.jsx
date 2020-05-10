import React from "react";
import Section from "./Section";
import data from "../data";
import { v4 as uuidv4 } from "uuid";

function Content() {
  return (
    <div className="container">
      <h1 className="heading">Web Development Course Resources List</h1>
      <div className="content">
        {data.map((section) => (
          <Section
            key={uuidv4()}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
