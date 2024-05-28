import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handleCount = (action) => {
    if (action == "inc") {
      setCount((prev) => prev + 1);
    }
    if (action == "dec") {
      setCount((prev) => prev - 1);
    }
  };
  
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=7`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        console.log(res);
      });
  }, []);

  return (
    <>
      <h2>This is the heading of the page</h2>
      {count}
      {data.map((value, index) => {
        return <p key={index}>{value.name}</p>;
      })}
      <button onClick={() => handleCount("inc")}>+</button>
      <button onClick={() => handleCount("dec")}>-</button>
    </>
  );
};

export default Effect;
