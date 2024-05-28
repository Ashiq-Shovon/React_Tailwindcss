import React from "react";

const data = ["alice", { name: "anik" }, "bob", "sakib"];

const Map = () => {
  return (
    <>
      <h2>this is from map</h2>
      {data.map((name) => (
        <>
          <p>{typeof name == "object" ? name.name : name}</p>
          {typeof name}
        </>
      ))}
    </>
  );
};

export default Map;
