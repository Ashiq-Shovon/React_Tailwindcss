import React from "react";
import { NavLink } from "react-router-dom";

const JavascriptNavBar = () => {
  return (
    <>
      <div className="flex justify-evenly bg-amber-500 p-3  text-xl">
        <div className="relative grid grid-flow-col group ">
          <div className="bg-red-100">
            <NavLink to="function">Function</NavLink>
          </div>
          <div className="flex absolute z-10 top-7 left-1/2 transform -translate-x-1/2   divide-x-2 invisible  group-hover:visible shadow-lg p-4 rounded-md  bg-green-600 w-[540px]">
            <div>
              <NavLink to="overview" className="block">
                Overview
              </NavLink>
              <NavLink to="" className="block">
                Arrow function expressions
              </NavLink>
              <NavLink to="" className="block">
                Default parameters
              </NavLink>
              <NavLink to="" className="block">
                Get
              </NavLink>
            </div>
            <div className="p-3">
              <NavLink to="" className="block">
                Method definations
              </NavLink>
              <NavLink to="" className="block">
                Rest parameters
              </NavLink>
              <NavLink to="" className="block">
                set
              </NavLink>
              <NavLink to="" className="block">
                The arguments object
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink to="object">Object</NavLink>
        <NavLink to="array">Array</NavLink>
        <NavLink to="string">String</NavLink>
      </div>
    </>
  );
};

export default JavascriptNavBar;
