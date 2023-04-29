import React from "react";
import styles from "./InstructionLine.module.css";

//STATE
interface IProps {
  current: boolean;
  number: number;
  content: string;
}

const InstructionLine: React.FC<IProps> = ({ current, number, content }) => {
  const currentClassName: string = current ? styles.current : "";

  return <div className={`${styles.line} ${currentClassName}`}>{content}</div>;
};

export default InstructionLine;
