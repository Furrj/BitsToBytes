import React from "react";
import styles from "./Accumulator.module.css";
import Draggable from "react-draggable";

const Accumulator: React.FC = () => {
  return (
    <Draggable>
      <div className={styles.accumulator}>Accumulator</div>
    </Draggable>
  );
};

export default Accumulator;
