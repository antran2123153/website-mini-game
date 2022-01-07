import React from "react";
import "./Bar.css";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

Bar.propTypes = {};

function Bar(props) {
  return (
    <div className="bar">
      <Link to="/">
        <FcHome className="bar-icon" />
      </Link>
    </div>
  );
}

export default Bar;
