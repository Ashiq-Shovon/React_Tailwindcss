import React from "react";
import Object from "../javascript-content/Object";
import Function from "../javascript-content/Function";
import { Outlet } from "react-router";
import JavascriptNavBar from "./JavascriptNavBar";

const JavascriptLayout = () => {
  return (
    <>
      <div>
        <div>
          <JavascriptNavBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default JavascriptLayout;