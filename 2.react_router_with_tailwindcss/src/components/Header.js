import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar-icon.png";
const Header = () => {
  return (
    <>
      <header className="bg-[#FFF7ED] px-5 z-20 relative">
        <div className="w-5/6 mx-auto">
          <div className="flex justify-between py-5 text-2xl">
            <NavLink to="/" className="flex font-bold">
              Van Life
            </NavLink>
            <div className="flex gap-20">
              <NavLink
                to="host"
                className={({ isActive }) => (isActive ? "underline" : null)}
              >
                Host
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? "underline " : null)}
              >
                About
              </NavLink>
              <NavLink
                to="vans"
                className={({ isActive }) => (isActive ? "underline" : null)}
              >
                Vans
              </NavLink>
              <NavLink
                to="login"
                className={({ isActive }) => (isActive ? "underline" : null)}
              >
                <img src={avatar} />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
