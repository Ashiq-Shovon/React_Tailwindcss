import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="bg-slate-500 text-2xl p-10">
        <div className=" ">
          <NavLink to="." end className={({isActive}) => ( isActive ? "px-5 py-3 rounded-lg bg-red-400" :"px-5 py-3 rounded-lg ")}>
            Dashboard
          </NavLink>
          <NavLink to="string" className={({isActive}) => ( isActive ? " px-5 py-3 rounded-lg bg-red-400" :"px-5 py-3 rounded-lg ")}>
            string
          </NavLink>
          <NavLink to="array" className={({isActive}) => ( isActive ? "px-5 py-3 rounded-lg  bg-red-400" :"px-5 py-3 rounded-lg ")}>
            Array
          </NavLink>
          <NavLink to="object" className={({isActive}) => ( isActive ? "px-5 py-3 rounded-lg  bg-red-400" :"px-5 py-3 rounded-lg ")}>
            Object
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
