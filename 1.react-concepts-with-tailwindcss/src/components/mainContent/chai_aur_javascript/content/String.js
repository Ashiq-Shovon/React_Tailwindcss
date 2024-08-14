import React, { useState } from "react";

const String = () => {
  const [name, setName] = useState("");

  const handleInput = (e) => {
    const val = e.target.value;
    setName(val);
  };
  const slice = name.slice(2, 4);
  const split = name.split(" ");
  const subString = name.substring(2, 5)

  return (
    <>
      <div className="basis-3/4">
        <div>
          <h1 className="text-2xl font-bold text-center uppercase">string</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 text-white">
          <div className="grid justify-center bg-orange-500  rounded-lg overflow-hidden p-6 ">
            <h1 className="text-2xl">UseState Hook Value</h1>
            <p className="underline">
              my name is {name}
            </p>
          </div>
          <div className="grid justify-center bg-green-700 rounded-lg">
            <h1 className="text-2xl">Length Property of String</h1>
            <p>character length is {name.length} </p>
          </div>
          <div className="grid justify-center bg-slate-500  rounded-lg overflow-hidden p-6">
            <h1 className="text-2xl">toUpperCase() Method of String</h1>
            <p>{name.toUpperCase()}</p>
          </div>
          <div className="grid justify-center bg-slate-500  rounded-lg overflow-hidden p-6">
            <h1 className="text-2xl">SubString Method of String</h1>
            <p>{subString}</p>
          </div>
          <div className="grid justify-center bg-slate-500  rounded-lg overflow-hidden p-6">
            <h1 className="text-2xl">Split Method of String</h1>
            {split.map((item, i) => (
              
              <p key={i}>{item}</p>
            ))}
            {split}
          </div>
          <div className="grid justify-center bg-slate-500  rounded-lg overflow-hidden p-6">
            <h1 className="text-2xl">Slice Method of String</h1>
            <p>{slice}</p>
          </div>
        </div>
        <div className="grid justify-center mt-20">
          <div className="grid justify-items-center content-center w-64 bg-lime-600 h-28 rounded-lg">
            <h2>Enter your name</h2>
            <textarea onChange={handleInput}></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default String;
