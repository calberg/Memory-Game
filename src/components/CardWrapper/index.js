import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="cardwrapper">{props.children}</div>;
}

export default Wrapper;
