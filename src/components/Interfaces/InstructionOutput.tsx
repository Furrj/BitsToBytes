import React from "react";
import styles from "./InstructionOutput.module.css";
import Draggable from "react-draggable";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../data/store";

const InstructionOutput: React.FC = () => {
  const nodeRef: React.MutableRefObject<null> = React.useRef(null);
  const instructionList: string[][] = useSelector(
    (state: RootState) => state.instructions.instructions
  );
  const formattedList: string[] = [];

  for (let line of instructionList) {
    const copy = [...line];
    copy[1] += ",";
    const formattedLine = copy.join(" ");
    formattedList.push(formattedLine);
  }
  const formattedInstructions: string = formattedList.join("\n");

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.output} ref={nodeRef}>
        <div className={styles.title}>Instruction Output</div>
        {formattedInstructions}
      </div>
    </Draggable>
  );
};

export default InstructionOutput;
