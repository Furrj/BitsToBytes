import React from "react";
import styles from "./ControlPanel.module.css";
import Draggable from "react-draggable";

const ControlPanel: React.FC = () => {
  return (
    <Draggable>
      <div className={styles.controlPanel}>
        <div className={styles.title}>Control Panel</div>
        <div className={styles.panelCont}></div>
      </div>
    </Draggable>
  );
};

export default ControlPanel;
