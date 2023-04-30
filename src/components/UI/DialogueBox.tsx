import React, { useState } from "react";
import styles from "./DialogueBox.module.css";
import Draggable from "react-draggable";

//UTILS
import dialogue from "../../utils/dialogue";

const DialogueBox: React.FC = () => {
  const [currentDialogue, setCurrentDialogue] = useState<number>(0);
  const nodeRef: React.MutableRefObject<null> = React.useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.box} ref={nodeRef}>
        {dialogue[currentDialogue]}
        <div className={styles.arrowCont}>
          <div
            className={styles.leftBox}
            onClick={() => setCurrentDialogue(currentDialogue - 1)}
          >
            <i className="fa-solid fa-angle-left" />
          </div>
          <div
            className={styles.rightBox}
            onClick={() => setCurrentDialogue(currentDialogue + 1)}
          >
            <i className="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DialogueBox;
