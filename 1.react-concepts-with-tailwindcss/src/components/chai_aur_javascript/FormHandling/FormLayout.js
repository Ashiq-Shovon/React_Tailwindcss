import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const FormLayout = () => {
  return (
    <div>
      <div className="flex justify-center mt-6">
        <NavLink to="." end className={({ isActive }) => isActive ? "border-b-slate-950 border py-3 px-5" : "border py-3 px-5"}> State</NavLink>
        <NavLink to="form_manupulation_with_formData" className={({ isActive }) => isActive ? "border-b-slate-950 border py-3 px-5": "border py-3 px-5"}>FormData</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default FormLayout;
