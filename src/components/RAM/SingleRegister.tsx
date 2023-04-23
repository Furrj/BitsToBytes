import React from "react";
import styles from "./SingleRegister.module.css";

//STATE
interface IProps {
  value: number;
}

const SingleRegister: React.FC<IProps> = ({ value }) => {
  return <div className={styles.singleRegister}>{value}</div>;
};

export default SingleRegister;
