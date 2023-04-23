import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementAddress,
  setValue,
  incrementValue,
} from "../../data/ramSlice";

const Change: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrementAddress())}>Increment</button>
      <button onClick={() => dispatch(incrementValue([0, 20]))}>
        Add to address 1
      </button>
    </div>
  );
};

export default Change;
