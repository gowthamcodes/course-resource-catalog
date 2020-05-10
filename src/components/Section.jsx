import React from "react";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

function Section(props) {
  let lists = props.description;
  // console.log(lists);

  return (
    <section>
      <h3>{props.title}</h3>
      <div className="list-elements">
        <ul>
          {lists.map((list) => (
            <List key={uuidv4()} name={list.name} value={list.value} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Section;
