import React from "react";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./User.css";
User.propTypes = {};

function User(props) {
  return (
    <div className="user">
      <Link to="/login">
        <FcBusinessContact className="user-icon" />
      </Link>
    </div>
  );
}

export default User;
