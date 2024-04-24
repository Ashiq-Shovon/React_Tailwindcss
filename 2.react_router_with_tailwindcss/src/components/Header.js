import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-[#FFF7ED] px-5">
        <div className="w-5/6 mx-auto">
          <div className="flex justify-between py-5">
            <NavLink to="/" className="flex font-bold">
              Van Life
            </NavLink>
            <div className="flex gap-20">
              <NavLink
                to="host"
                className={({ isActive }) =>
                  isActive ? "underline bg-red-400" : null
                }
              >
                Host
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "underline bg-red-400" : null
                }
              >
                About
              </NavLink>
              <NavLink
                to="vans"
                className={({ isActive }) =>
                  isActive ? "underline bg-red-400" : null
                }
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
