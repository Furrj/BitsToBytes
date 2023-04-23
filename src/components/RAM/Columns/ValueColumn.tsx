import React from "react";
import styles from "./ValueColumn.module.css";

//COMPS
import SingleRegister from "../SingleRegister";

const ValueColumn: React.FC = () => {
  return (
    <div className={styles.valueColumn}>
      <span>Value</span>
      <SingleRegister />
      <SingleRegister />
    </div>
  );
};

export default ValueColumn;
