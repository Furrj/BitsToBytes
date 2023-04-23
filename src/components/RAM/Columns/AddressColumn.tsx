import React from "react";
import styles from "./AddressColumn.module.css";

//COMPS
import SingleRegister from "../SingleRegister";

const AddressColumn: React.FC = () => {
  return (
    <div className={styles.addressColumn}>
      <span>Address</span>
      <SingleRegister />
      <SingleRegister />
    </div>
  );
};

export default AddressColumn;
