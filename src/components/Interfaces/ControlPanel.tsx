import React from "react";
import styles from "./ControlPanel.module.css";
import Draggable from "react-draggable";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import * as ramReducer from "../../data/ramSlice";
import { RootState } from "../../data/store";

const ControlPanel: React.FC = () => {
  const values: number[] = useSelector((state: RootState) => state.ram.data);
  const address: number = useSelector(
    (state: RootState) => state.ram.currentAddress
  );
  const dispatch = useDispatch();

  return (
    <Draggable>
      <div className={styles.controlPanel}>
        <div className={styles.title}>Control Panel</div>
        <div className={styles.panelCont}>
          <div className={styles.addressBox}>
            <div className={styles.boxTitle}>Address</div>
            <input type="number" name="address" id="address" />
            <button onClick={() => dispatch(ramReducer.setAddress(2))}>
              Set
            </button>
            <div className={styles.currentValue}>{address}</div>
          </div>
          <div className={styles.valueBox}>
            <div className={styles.boxTitle}>Value</div>
            <input type="number" name="address" id="address" />
            <button onClick={() => dispatch(ramReducer.setValue([0, 20]))}>
              Set
            </button>
            <div className={styles.currentValue}>{values[address]}</div>
          </div>
          <div className={styles.accumulatorBox}>
            <div className={styles.boxTitle} style={{ marginLeft: "2px" }}>
              Accumulator
            </div>
            <button>Load</button>
            <button>Store</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ControlPanel;
