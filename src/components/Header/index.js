import React from "react";
import {Link} from "react-router-dom";


export const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
        </div>
      </div>
    </header>
  );
};
