import React from "react";
import styles from "./RAM.module.css";

//COMPS
import Register from "./Register";
import AddressColumn from "./Columns/AddressColumn";

const RAM: React.FC = () => {
  return (
    <div className={styles.ram}>
      <div className={styles.title}>
        <h3>RAM</h3>
      </div>
      <div className={styles.registers}>
        <AddressColumn />
      </div>
    </div>
  );
};

export default RAM;
