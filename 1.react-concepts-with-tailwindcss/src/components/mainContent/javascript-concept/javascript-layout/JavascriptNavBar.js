import React from "react";
import { NavLink } from "react-router-dom";

const JavascriptNavBar = () => {
  return (
    <>
      <div className="flex justify-evenly bg-amber-500 p-3 text-2xl">
        <NavLink to="function">Function</NavLink>
        <NavLink to="object">Object</NavLink>
        <NavLink to="array">Array</NavLink>
        <NavLink to="string">String</NavLink>
      </div>
    </>
  );
};

export default JavascriptNavBar;
