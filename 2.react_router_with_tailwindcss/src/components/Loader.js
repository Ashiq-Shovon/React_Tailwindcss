import React from "react";
import BarLoader from "react-spinners/BarLoader";
import MoonLoader from "react-spinners/MoonLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import RotateLoader from "react-spinners/RotateLoader";
import SyncLoader from "react-spinners/SyncLoader";
const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-120px",
  position: "fixed",
  zIndex: "10",
  width: "100%",
  height: "100%",
  backgroundColor: "#FFF7ED",
};

const Loader = () => {
  return (
    <div>
      <SyncLoader cssOverride={override} />
    </div>
  );
};

export default Loader;
