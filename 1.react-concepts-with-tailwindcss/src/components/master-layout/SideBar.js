import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="grid">
        <NavLink
          to="/gallery"
        
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3"
              : "px-8 py-3  rounded-l"
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/javascript-concept"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3 "
              : "px-8 py-3  rounded-lg"
          }
        >
          Javascript Concept
        </NavLink>
        <NavLink
          to="/mapMethod"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3 "
              : "px-8 py-3  rounded-lg"
          }
        >
          Map Method
        </NavLink>
        <NavLink
          to="/formManupulation"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3"
              : "px-8 py-3 rounded-lg"
          }
        >
          FormManupulation
        </NavLink>
        <NavLink
          to="/useRef"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3"
              : "px-8 py-3 rounded-lg"
          }
        >
          UseRef
        </NavLink>
        <NavLink
          to="/effect"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3"
              : "px-8 py-3 rounded-lg"
          }
        >
          Effect
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3"
              : "px-8 py-3 rounded-lg"
          }
        >
          chat
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3"
              : "px-8 py-3 rounded-lg"
          }
        >
          Map
        </NavLink>
        <NavLink
          to="chaiAurJavascript"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 rounded-lg px-8 py-3"
              : "px-8 py-3 rounded-lg"
          }
        >
          Aur Javascript
        </NavLink>
      </div>
    </>
  );
};

export default SideBar;
