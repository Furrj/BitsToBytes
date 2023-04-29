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
  let content: JSX.Element[] = [];

  printInstructions(formatInstructions());

  function formatInstructions(): string[] {
    const formattedList: string[] = [];

    for (let line of instructionList) {
      const copy = [...line];
      copy[1] += ",";
      const formattedLine = copy.join(" ");
      formattedList.push(formattedLine);
    }

    return formattedList;
  }

  function printInstructions(formattedList: string[]) {
    if (formattedList.length > 0 && formattedList.length <= 5) {
      let count: number = 0;
      for (let line of formattedList) {
        content.push(
          <InstructionLine
            content={line}
            number={count}
            current={count === currentInstruction}
            key={count}
          />
        );
        count++;
      }
    } else if (formattedList.length > 5) {
      for (let i = 0; i < 5; i++) {
        content.push(
          <InstructionLine
            content={formattedList[currentInstruction + i]}
            number={currentInstruction + i}
            current={i === 0}
            key={currentInstruction + i}
          />
        );
      }
    }
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.output} ref={nodeRef}>
        <div className={styles.title}>Instruction Output</div>
        <div className={styles.instructions}>{content}</div>
      </div>
    </Draggable>
  );
};

export default InstructionOutput;
