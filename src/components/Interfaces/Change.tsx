import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, setAddress } from "../../data/ramSlice";

const Change: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Change;
