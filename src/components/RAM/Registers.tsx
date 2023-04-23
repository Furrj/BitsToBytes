import React from "react";
import styles from "./Registers.module.css";

//REDUX
import type { RootState } from "../../data/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setAddress } from "../../data/ramSlice";

//COMPS
import AddressColumn from "./Columns/AddressColumn";
import ValueColumn from "./Columns/ValueColumn";

const Registers: React.FC = () => {
  const currentAddress: number = useSelector(
    (state: RootState) => state.ram.currentAddress
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.register}>
      <AddressColumn />
      <ValueColumn />
    </div>
  );
};

export default Registers;
