import React from "react";
import styles from "./Accumulator.module.css";
import Draggable from "react-draggable";

//REDUX
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";

const Accumulator: React.FC = () => {
  const value: number = useSelector((state: RootState) => state.register.value);

  const nodeRef: React.MutableRefObject<null> = React.useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={styles.accumulator} ref={nodeRef}>
        <div className={styles.title}>Accumulator</div>
        <div className={styles.valueCont}>
          <div className={styles.valueBox}>
            <h1 className={styles.value}>{value}</h1>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Accumulator;
