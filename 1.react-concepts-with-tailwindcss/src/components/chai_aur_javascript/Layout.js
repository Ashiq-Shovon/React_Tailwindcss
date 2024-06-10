import React from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
