import React, { useState } from "react";

const ObjectComp = () => {
  const [bio, setBio] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    age: "",
  });
  const handleBio = (e) => {
    const { name, value, type } = e.target;
    console.log(type);
    setBio((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    // alert(bio);
    e.preventDefault();
    console.log(bio);
  };
  const myNum = Symbol("hellword");
  const val = "hello";
  const obj = {
    name: "ashiq",
    full_name: "ashiqur Rahman",
    age: 32,
    [myNum]: 30,
    [val]: "nice",
    email: "ashiq@gmail.com",
    fullName: function () {
      console.log(`my full name is: ${this.full_name}`);
    },
  };

  const store = {
    pen: 3,
    pencil: 8,
    bag: 9,
    soap: false,
    ram: "not available",
  };
  const storeArr = Object.entries(store);
  const storeObjAgain = Object.fromEntries(storeArr);
  return (
    <>
      <div className="basis-3/4">
        <div>
          <h1 className="text-center">Bio Data</h1>
          <div className="grid grid-cols-5">
            <div>
              <h1>Simple way to access object property by dot notation</h1>
              <p> {obj.name}</p>
            </div>

            <p>{obj["age"]}</p>
            <p>{obj[myNum]}</p>
            <p>{obj[val]}</p>
            <p>{obj.email}</p>
            <p>{obj["full_name"]}</p>
            <p>{obj.fullName()}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            value={bio.firstName}
            onChange={handleBio}
          ></input>
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            value={bio.lastName}
            onChange={handleBio}
          ></input>
          <label>Mobile</label>
          <input
            name="mobile"
            type="number"
            value={bio.mobile}
            onChange={handleBio}
          ></input>
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={bio.age}
            onChange={handleBio}
          ></input>
          {typeof bio.mobile}
          <button type="submit">submit</button>
        </form>
        <div>
          <h2 className="text-2xl uppercase">converting Object into array</h2>
          {store.bag}
          {console.log(store)}
          {console.log(storeArr)}
          {console.log(storeObjAgain)}
        </div>
      </div>
    </>
  );
};

export default ObjectComp;
