import React from "react";

function NavElement(props) {
  return (
    <li>
      <a href={props.link}>{props.content}</a>
    </li>
  );
}

export default NavElement;
