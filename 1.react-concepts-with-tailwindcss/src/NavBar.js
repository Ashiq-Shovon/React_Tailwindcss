import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="text-center bg-red-200 py-4">
        <Link to="/gallery" className="px-2">Gallery</Link>
        <Link to="/mapMethod" className="px-2">Map Method</Link>
        <Link to="/formManupulation" className="px-2">FormManupulation</Link>
      </nav>
    </>
  );
};

export default NavBar;
