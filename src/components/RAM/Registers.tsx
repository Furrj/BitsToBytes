import React from "react";
import styles from "./Registers.module.css";

//REDUX
import type { RootState } from "../../data/store";
import { useSelector } from "react-redux";

//COMPS
import AddressColumn from "./Columns/AddressColumn";
import ValueColumn from "./Columns/ValueColumn";

const Registers: React.FC = () => {
  const currentAddress: number = useSelector(
    (state: RootState) => state.ram.currentAddress
  );

  return (
    <div className={styles.register}>
      <AddressColumn address={currentAddress} />
      <ValueColumn address={currentAddress} />
    </div>
  );
};

export default Registers;
