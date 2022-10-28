import React from "react";
import "../styles/error.scss";

const Error = () => {
  return (
    <div>
      <div className="error">
        <h1>Oops! Page not found</h1>
        <h2>404</h2>
        <p>We cant find the page your looking for</p>
        <a href="/">Go Back Home</a>
      </div>
    </div>
  );
};

export default Error;
