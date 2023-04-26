import React from "react";
import styles from "./AddressColumn.module.css";

//COMPS
import SingleRegister from "../SingleRegister";

//STATE
interface IProps {
  address: number;
}

const AddressColumn: React.FC<IProps> = ({ address }) => {
  console.log(address);

  return (
    <div className={styles.addressColumn}>
      <span>Address</span>
      <SingleRegister value={address} />
      <SingleRegister value={address + 1} />
      <SingleRegister value={address + 2} />
      <SingleRegister value={address + 3} />
      <SingleRegister value={address + 4} />
    </div>
  );
};

export default AddressColumn;
