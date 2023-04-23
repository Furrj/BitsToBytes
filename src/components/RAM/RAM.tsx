import React from "react";
import styles from "./RAM.module.css";
import Draggable from "react-draggable";

//COMPS
import Registers from "./Registers";

const RAM: React.FC = () => {
  return (
    <Draggable>
      <div className={styles.ram}>
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
