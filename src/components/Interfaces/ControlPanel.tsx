import React from "react";
import styles from "./ControlPanel.module.css";
import Draggable from "react-draggable";

const ControlPanel: React.FC = () => {
  return (
    <Draggable>
      <div className={styles.controlPanel}>
        <div className={styles.title}>Control Panel</div>
        <div className={styles.panelCont}>
          <div className={styles.addressBox}>
            <div className={styles.boxTitle}>Address</div>
            <input type="number" name="address" id="address" />
            <button>Set</button>
            <div className={styles.currentValue}>9</div>
          </div>
          <div className={styles.valueBox}>
            <div className={styles.boxTitle}>Value</div>
            <input type="number" name="address" id="address" />
            <button>Set</button>
            <div className={styles.currentValue}>9</div>
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
