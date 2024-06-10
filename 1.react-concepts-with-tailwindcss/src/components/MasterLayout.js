import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

const MasterLayout = () => {
  return (
    <div>
      <div className="flex flex-1">
        <div className="basis-1/6">
          <NavBar />
        </div>
        <div className="basis-5/6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
