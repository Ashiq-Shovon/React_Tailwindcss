import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

const MasterLayout = () => {
  return (
    <>
      <div className="flex flex-1">
        <div className="basis-1/6 bg-red-200 h-screen overflow-y-scroll">
          <SideBar />
        </div>
        <div className="basis-5/6 h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
};


export default MasterLayout;
