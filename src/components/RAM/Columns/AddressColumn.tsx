import React from "react";
import styles from "./AddressColumn.module.css";

//COMPS
import SingleRegister from "../SingleRegister";

//STATE
interface IProps {
  address: number;
}

const AddressColumn: React.FC<IProps> = ({ address }) => {
  return (
    <div className={styles.addressColumn}>
      <span>Address</span>
      <SingleRegister value={address} selectedRow={true} />
      <SingleRegister value={++address} selectedRow={false} />
      <SingleRegister value={++address} selectedRow={false} />
      <SingleRegister value={++address} selectedRow={false} />
      <SingleRegister value={++address} selectedRow={false} />
    </div>
  );
};

export default AddressColumn;
