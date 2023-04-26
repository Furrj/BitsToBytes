import React from "react";
import styles from "./SingleRegister.module.css";

//STATE
interface IProps {
  value: number;
  selectedRow: boolean;
}

const SingleRegister: React.FC<IProps> = ({ value, selectedRow }) => {
  const selectedRowClassName: string = selectedRow ? styles.selectedRow : "";

  return (
    <div className={`${styles.singleRegister} ${selectedRowClassName}`}>
      {value}
    </div>
  );
};

export default SingleRegister;
