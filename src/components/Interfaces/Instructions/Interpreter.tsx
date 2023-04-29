import React from "react";
import styles from "./Interpreter.module.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import * as ramReducer from "../../../data/ramSlice";
import * as instructionReducer from "../../../data/instructionSlice";
import * as registerReducer from "../../../data/registerSlice";
import { RootState } from "../../../data/store";

const Interpreter: React.FC = () => {
  const instructionList: string[][] = useSelector(
    (state: RootState) => state.instructions.instructions
  );
  const currentInstruction: number = useSelector(
    (state: RootState) => state.instructions.currentInstruction
  );
  const dispatch = useDispatch();

  function executeInstruction(): void {
    const instructionLine: string[] = instructionList[currentInstruction];

    switch (instructionLine[0]) {
      case "LOD":
        console.log("Load instruction");
        switch (instructionLine[1]) {
          case "ACC":
            break;
        }
        break;
      case "STO":
        console.log("Store instuction");
        break;
      case "ADD":
        console.log("Add instruction");
        break;
      case "MOV":
        console.log("Move instruction");
        switch (instructionLine[1]) {
          case "ACC":
            dispatch(registerReducer.setValue(parseInt(instructionLine[2])));
            break;
        }
        break;
    }
  }

  return <button onClick={executeInstruction}>Execute</button>;
};

export default Interpreter;
