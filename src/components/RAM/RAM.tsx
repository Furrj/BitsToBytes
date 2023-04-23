import React from "react";
import styles from "./RAM.module.css";
import DataHandler from "../../data/DataHandler";

//COMPS
import Registers from "./Registers";

interface IProps {
  data: DataHandler;
}

const RAM: React.FC<IProps> = ({ data }) => {
  return (
    <div className={styles.ram}>
      <div className={styles.title}>
        <h3>RAM</h3>
      </div>
      <div className={styles.registersBox}>
        <Registers />
      </div>
    </div>
  );
};

export default RAM;
