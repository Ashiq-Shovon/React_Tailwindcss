import React from "react";
import { useState, useEffect, useRef } from "react";

const FormManupulation = () => {
  const ele = useRef(null);

  const ele1 = useRef(null);
  const inputVal = useRef();
  const clear = (e) => {
    e.preventDefault();
    ele1.current.reset();
  };

  const changeStyle = (e) => {
    e.preventDefault();
    ele.current.reset();
  };

  const initial = {
    firstName: "",
    lastName: "",
  };

  const [text, setText] = useState(initial);
  const [counter, setCounter] = useState(0);

  const handleCount = (action) => {
    if (action == "inc") {
      setCounter((preVal) => preVal + 1);
    } else if (action == "dec") {
      setCounter((preVal) => preVal - 1);
    }
  };

  const handleText = (e) => {
    const { name, value } = e.target;
    setText((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputVal.current.className);
    
  };

  return (
    <>
      <button className="py-4 px-2 rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Save changes
      </button>
      <button className="py-4 px-2 rounded bg-sky-500 hover:bg-sky-700 ...">
        Save changes
      </button>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold underline">Hello world!</h1>
      <input
        type="text"
        name="email"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="you@example.com"
      />
      <div ref={inputVal}>
        <p className="first"></p>
        <p className="second"></p>
      </div>
      <form onSubmit={handleSubmit} ref={ele1}>
        <h1 className="padding">hello world</h1>
        <input
          type="text"
          name="firstName"
          className="outline"
          onChange={handleText}
        ></input>
        <br />
        <input
          className="outline"
          type="text"
          name="lastName"
          onChange={handleText}
        />
        <button
          type="submit"
          // onClick={clear}
          className="rounded-4 px-4 py-2 outline-offset-2 outline-blue-500 bg-orange-400"
        >
          submit
        </button>
        <input
          type="file"
          className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
        />
      </form>
      <h2> {counter} </h2>

      <button onClick={() => handleCount("inc")}>+</button>
      <button onClick={() => handleCount("dec")}>-</button>
      <br />
      <form ref={ele}>
        <input name="email" type="text" />
        <input name="email" type="text" />
        <button type="submit" onClick={changeStyle}>
          click me
        </button>
      </form>
    </>
  );
};

export default FormManupulation;
