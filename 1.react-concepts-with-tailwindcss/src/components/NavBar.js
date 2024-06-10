import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="h-screen grid justify-center items-center  bg-red-200 overflow-y-scroll">
        <NavLink to="/gallery" end className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3" : "px-5 py-3  rounded-lg" }>Gallery</NavLink>
        <NavLink to="/mapMethod" className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3 " : "px-5 py-3  rounded-lg" }>Map Method</NavLink>
        <NavLink to="/formManupulation" className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3" : "px-5 py-3 rounded-lg" }>FormManupulation</NavLink>
        <NavLink to="/useRef" className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3" : "px-5 py-3 rounded-lg" }>UseRef</NavLink>
        <NavLink to="/effect" className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3" : "px-5 py-3 rounded-lg" }>Effect</NavLink>
        <NavLink to="/chat" className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3" : "px-5 py-3 rounded-lg" }>chat</NavLink>
        <NavLink to="/map" className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3" : "px-5 py-3 rounded-lg" }>Map</NavLink>
        <NavLink to="/chaiAurJavascript" className={({isActive}) => isActive ?  "bg-slate-500 rounded-lg px-5 py-3" : "px-5 py-3 rounded-lg" }>Chair Aur Javascript</NavLink>
     
      </nav>
    </>
  );
};

export default NavBar;
