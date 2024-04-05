import React from "react";
import "./Missing.css";
import gif404 from "../../assets/error.gif";

function Missing() {
  return (
    <div className="errorMessage">
        <h1>404 not found</h1>
        <img src={gif404} alt="404" />
        </div>
);
}

export default Missing;
