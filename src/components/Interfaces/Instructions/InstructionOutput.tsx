import React from "react";
import styles from "./InstructionOutput.module.css";
import Draggable from "react-draggable";

//COMPS
import InstructionLine from "./InstructionLine";

//REDUX
import { useSelector } from "react-redux";
import { RootState } from "../../../data/store";

const InstructionOutput: React.FC = () => {
  const nodeRef: React.MutableRefObject<null> = React.useRef(null);
  const instructionList: string[][] = useSelector(
    (state: RootState) => state.instructions.instructions
  );
  const currentInstruction: number = useSelector(
    (state: RootState) => state.instructions.currentInstruction
  );
  const formattedList: string[] = [];

  for (let line of instructionList) {
    const copy = [...line];
    copy[1] += ",";
    const formattedLine = copy.join(" ");
    formattedList.push(formattedLine);
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.output} ref={nodeRef}>
        <div className={styles.title}>Instruction Output</div>
        {formattedList.map((line) => {
          return <InstructionLine content={line} number={0} current={true} />;
        })}
      </div>
    </Draggable>
  );
};

export default InstructionOutput;
