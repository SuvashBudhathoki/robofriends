import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link className="link dim near white" to="/">
        Home
      </Link>
      <Link className="link dim near white" to="/About">
        About
      </Link>
    </div>
  );
};

export default Nav;
