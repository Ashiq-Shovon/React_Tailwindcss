import React from "react";
import { NavLink } from "react-router-dom";
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
