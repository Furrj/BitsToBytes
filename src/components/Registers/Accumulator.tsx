import React from "react";
import styles from "./Accumulator.module.css";
import Draggable from "react-draggable";

const Accumulator: React.FC = () => {
  return (
    <Draggable>
      <div className={styles.accumulator}>
        <div className={styles.title}>Accumulator</div>
        <div className={styles.valueCont}>
          <div className={styles.valueBox}>
            <h1 className={styles.value}>8</h1>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Accumulator;
