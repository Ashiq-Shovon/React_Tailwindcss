import React from "react";

const userData = [
  {
    id: 1,
    name: "anik",
    age: 20,
    bio: {
      from: "dhaka",
    },
    height: 5.7,
  },
  {
    id: 2,
    name: "arif",
    bio: {
      from: "dhaka",
    },
    age: 24,
    height: 6.7,
  },
  {
    id: 3,
    name: "rakib",
    bio: {
      from: "dhaka",
    },
    age: 40,
    height: 9.7,
  },
  {
    id: 4,
    name: "hasib",
    bio: {
      from: "dhaka",
    },
    age: 30,
    height: 2.7,
  },
];
const MapMethod = () => {
  return (
    <>
      {userData.map((value, index) => {
        return (
     
            <div key={index}>
              <h1>{value.bio.from}</h1>
            </div>
          
        );
      })}
    </>
  );
};

export default MapMethod;
