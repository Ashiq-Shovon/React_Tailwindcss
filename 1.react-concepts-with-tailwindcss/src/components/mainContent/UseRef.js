import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const input = useRef();
  
  useEffect(() => {
    console.log(input.current.name = "type here") 
    input.current.focus();
  }, []);
  
  return (
    <div>
      <h1> this is use ref</h1>
      <input ref={input} type="text" name="name" className="px-2 py-3"></input>
    </div>
  );
};

export default UseRef;
