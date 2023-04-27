import React, { useState } from "react";
import styles from "./InstructionInput.module.css";
import Draggable from "react-draggable";

const InstructionInput: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const nodeRef: React.MutableRefObject<null> = React.useRef(null);

  function inputHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setInput(e.target.value);
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.instructions} ref={nodeRef}>
        <div className={styles.title}>Instructions</div>
        <textarea
          name="instructions"
          id="instructions"
          onChange={inputHandler}
        ></textarea>
        <button>Execute</button>
      </div>
    </Draggable>
  );
};

export default InstructionInput;
