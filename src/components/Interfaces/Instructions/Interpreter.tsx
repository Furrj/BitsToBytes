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
  const ramValues: number[] = useSelector((state: RootState) => state.ram.data);
  const accumulatorValue: number = useSelector(
    (state: RootState) => state.register.value
  );
  const dispatch = useDispatch();
  const instructionLine: string[] = instructionList[currentInstruction];

  function executeInstruction(): void {
    switch (instructionLine[0]) {
      case instructions.Load:
        loadInstruction();
        break;
      case instructions.Store:
        storeInstruction();
        break;
      case instructions.Add:
        addInstruction();
        break;
      case instructions.Move:
        moveInstruction();
        break;
      case instructions.MoveI:
        movIInstruction();
        break;
    }
    dispatch(instructionReducer.incrementCurrentInstruction());
  }

  function loadInstruction(): void {
    console.log("Load instruction");
    switch (instructionLine[1]) {
      case "A":
        dispatch(
          registerReducer.setValue(ramValues[parseInt(instructionLine[2])])
        );
        break;
    }
  }

  function storeInstruction(): void {
    console.log("Store instuction");
    dispatch(
      ramReducer.setValue([parseInt(instructionLine[1]), accumulatorValue])
    );
  }

  function moveInstruction(): void {
    console.log("Move instruction");
  }

  function movIInstruction(): void {
    console.log("Move Immediate instruction");
    switch (instructionLine[1]) {
      case "A":
        dispatch(registerReducer.setValue(parseInt(instructionLine[2])));
        break;
    }
  }

  function addInstruction(): void {
    console.log("Add instruction");
  }

  return (
    <button onClick={executeInstruction} className={styles.button}>
      <h4>Execute</h4>
    </button>
  );
};

enum instructions {
  Load = "LOD",
  Store = "STO",
  Move = "MOV",
  MoveI = "MOVI",
  Add = "ADD",
}

export default Interpreter;
