import React from "react";
import { useOutletContext } from "react-router";
const HostVanInfo = () => {
  const {currentVan} = useOutletContext();
  return (
    <div>
      <h3>host van Info</h3>
      <p>{ currentVan.description}</p>
    </div>
  );
};

export default HostVanInfo;
