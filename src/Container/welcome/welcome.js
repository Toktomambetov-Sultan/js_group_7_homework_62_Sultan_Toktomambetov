import React from "react";
import "./welcome.css";

export default function welcome(props) {
  const start = () => {
    props.history.push({
      pathname: "/home",
    });
  };
  return (
    <div className="Welcome">
      <h1 className="title">Welcome</h1>
      <button onClick={start} className="btn">start</button>
    </div>
  );
}
