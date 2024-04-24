import React from "react";
import { useOutletContext } from "react-router";
const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <>
      <div>
        <div className="mb-5">
          <p> <span className="font-bold">Name:</span> {currentVan.name}</p>
        </div>
        <div className="mb-5">
          <p><span className="font-bold">Category:</span> {currentVan.type}</p>
        </div>
        <div className="mb-5">
          <p><span className="font-bold">Description:</span> {currentVan.description}</p>
        </div>

        <p> <span className="font-bold">Visibility:</span> Public</p>
      </div>
    </>
  );
};

export default HostVanInfo;
