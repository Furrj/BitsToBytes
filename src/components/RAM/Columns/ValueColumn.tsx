import React from "react";
import styles from "./ValueColumn.module.css";

import type { RootState } from "../../../data/store";
import { useSelector } from "react-redux";

//COMPS
import SingleRegister from "../SingleRegister";

//STATE
interface IProps {
  address: number;
}

const ValueColumn: React.FC<IProps> = ({ address }) => {
  const data: number[] = useSelector((state: RootState) => state.ram.data);

  return (
    <div className={styles.valueColumn}>
      <span>Value</span>
      <SingleRegister value={data[address]} selectedRow={true} />
      <SingleRegister value={data[++address]} selectedRow={false} />
      <SingleRegister value={data[++address]} selectedRow={false} />
      <SingleRegister value={data[++address]} selectedRow={false} />
      <SingleRegister value={data[++address]} selectedRow={false} />
    </div>
  );
};

export default ValueColumn;
