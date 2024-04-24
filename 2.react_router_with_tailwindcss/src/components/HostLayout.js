import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-center gap-7 py-4">
          <NavLink end to="." className={({ isActive }) => isActive ? "underline bg-red-400": null}>Dashboard</NavLink>
          <NavLink to="income" className={({ isActive }) => isActive ? "underline bg-red-400": null}>Income</NavLink>
          <NavLink to="vans" className={({ isActive }) => isActive ? "underline bg-red-400": null}>Vans</NavLink>
          <NavLink to="reviews" className={({ isActive }) => isActive ? "underline bg-red-400": null}>Reviews</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
