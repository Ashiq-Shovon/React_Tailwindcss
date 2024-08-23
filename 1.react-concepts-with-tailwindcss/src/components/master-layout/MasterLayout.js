import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

const MasterLayout = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex justify-evenly items-center h-14 bg-green-300 border-b-2 border-orange-950">
          <div>hello world</div>
          <div>java</div>
          <div>javascript</div>
          <div>python</div>
        </div>
        <div className="flex flex-1">
          <div className="basis-1/6  bg-teal-200 h-screen overflow-y-scroll">
            <SideBar />
          </div>
          <div className="basis-5/6 bg-blue-50  h-screen overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
