import React, { useState } from "react";
import styles from "./InstructionInput.module.css";
import Draggable from "react-draggable";

//REDUX
import { useDispatch } from "react-redux";
import { setInstructions } from "../../../data/instructionSlice";

const InstructionInput: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const nodeRef: React.MutableRefObject<null> = React.useRef(null);

  function inputHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setInput(e.target.value.toUpperCase());
  }

  function saveInstructions(): void {
    const splitByLine: string[] = input.split("\n");
    const list: string[][] = [];
    for (let line of splitByLine) {
      list.push(line.split(" "));
    }
    for (let instruction of list) {
      instruction[1] = instruction[1].slice(0, instruction[1].length - 1);
    }
    dispatch(setInstructions(list));
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.instructions} ref={nodeRef}>
        <div className={styles.title}>Terminal</div>
        <textarea
          name="instructions"
          id="instructions"
          onChange={inputHandler}
          value={input}
        ></textarea>
        <button onClick={saveInstructions}>Store</button>
      </div>
    </Draggable>
  );
};

export default InstructionInput;
