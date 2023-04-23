import React from "react";
import styles from "./ValueColumn.module.css";
import DataHandler from "../../../data/DataHandler";

//COMPS
import SingleRegister from "../SingleRegister";

//STATE
interface IProps {
  address: number;
  dataHandler: DataHandler;
}

const ValueColumn: React.FC<IProps> = ({ address, dataHandler }) => {
  return (
    <div className={styles.valueColumn}>
      <span>Value</span>
      <SingleRegister value={dataHandler.getRegisterData(address)} />
      <SingleRegister value={dataHandler.getRegisterData(address + 1)} />
      <SingleRegister value={dataHandler.getRegisterData(address + 2)} />
      <SingleRegister value={dataHandler.getRegisterData(address + 3)} />
      <SingleRegister value={dataHandler.getRegisterData(address + 4)} />
    </div>
  );
};

export default ValueColumn;
