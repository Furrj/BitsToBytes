import React from "react";
import styles from "./Register.module.css";

const Register: React.FC = () => {
  return (
    <div className={styles.register}>
      <div className={styles.value}></div>
      <div className={styles.address}>0A</div>
    </div>
  );
};

export default Register;
