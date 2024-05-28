import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  update,
} from "./counterSlice";

export const udate = () => {
  return (dispatc) => {
    dispatc(increment());
  };
};
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>increment</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>increment</button>
      <button onClick={() => dispatch(udate())}>outside silice</button>
    </div>
  );
};

export default Counter;
