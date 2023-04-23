import React from "react";
import styles from "./RAM.module.css";
import DataHandler from "../../data/DataHandler";
import Draggable from "react-draggable";

//COMPS
import Registers from "./Registers";

interface IProps {
  dataHandler: DataHandler;
}

const RAM: React.FC<IProps> = ({ dataHandler }) => {
  return (
    <Draggable>
      <div className={styles.ram}>
        <div className={styles.title}>
          <h3>RAM</h3>
        </div>
        <div className={styles.registersBox}>
          <Registers dataHandler={dataHandler} />
        </div>
      </div>
    </Draggable>
  );
};

export default RAM;
