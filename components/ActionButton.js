import React from "react";

const ActionButton = props => (
  <button className={`${props.active} ${props.state}`}>
    <span className="btn-txt">{props.text}</span>
  </button>
);

export default ActionButton;
