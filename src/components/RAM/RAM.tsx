import React from "react";
import styles from "./RAM.module.css";
import Draggable from "react-draggable";

//COMPS
import Registers from "./Registers";

const RAM: React.FC = () => {
  const nodeRef: React.MutableRefObject<null> = React.useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.ram} ref={nodeRef}>
        <div className={styles.title}>
          <h3>RAM</h3>
        </div>
        <div className={styles.registersBox}>
          <Registers />
        </div>
      </div>
    </Draggable>
  );
};

export default RAM;
