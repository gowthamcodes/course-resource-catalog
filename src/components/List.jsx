import React from "react";

function List(props) {
  return (
    <li>
      <span>
        <a className="description" href={props.value}>
          {props.name}
        </a>
      </span>
    </li>
  );
}

export default List;
