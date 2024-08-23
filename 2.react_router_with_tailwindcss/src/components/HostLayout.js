import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-center relative  py-4 z-20">
          <NavLink
            end
            to="."
            className={({ isActive }) =>
              isActive
                ? "border px-3 py-2 border-orange-800"
                : "border px-3 py-2"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive
                ? "border px-3 py-2 border-orange-800"
                : "border px-3 py-2"
            }
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive
                ? "border px-3 py-2 border-orange-800"
                : "border px-3 py-2"
            }
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive
                ? "border px-3 py-2 border-orange-800"
                : "border px-3 py-2"
            }
          >
            Reviews
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
