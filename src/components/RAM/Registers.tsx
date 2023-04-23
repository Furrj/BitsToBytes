import React from "react";
import styles from "./Registers.module.css";

//COMPS
import AddressColumn from "./Columns/AddressColumn";
import ValueColumn from "./Columns/ValueColumn";

const Registers: React.FC = () => {
  return (
    <div className={styles.register}>
      <AddressColumn />
      <ValueColumn />
    </div>
  );
};

export default Registers;
