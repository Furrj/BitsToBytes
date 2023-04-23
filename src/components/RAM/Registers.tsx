import React from "react";
import styles from "./Registers.module.css";
import DataHandler from "../../data/DataHandler";

//REDUX
import type { RootState } from "../../data/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setAddress } from "../../data/ramSlice";

//COMPS
import AddressColumn from "./Columns/AddressColumn";
import ValueColumn from "./Columns/ValueColumn";

//STATE
interface IProps {
  dataHandler: DataHandler;
}

const Registers: React.FC<IProps> = ({ dataHandler }) => {
  const currentAddress: number = useSelector(
    (state: RootState) => state.ram.currentAddress
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.register}>
      <AddressColumn address={currentAddress} />
      <ValueColumn address={currentAddress} dataHandler={dataHandler} />
    </div>
  );
};

export default Registers;
