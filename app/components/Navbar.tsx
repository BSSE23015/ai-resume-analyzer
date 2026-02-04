import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <p className="text-2xl font-bold text-gradient">Reumind</p>
        </Link>
        <Link to="/uploadm">
          <p className="primary-button w-fit">Upload</p>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
