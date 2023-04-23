import React from "react";
import styles from "./ComponentToolbarBox.module.css";

//STATE
interface IProps {
  title: string;
  component: JSX.Element;
  updateComponents: (component: JSX.Element) => void;
}

const ComponentToolbarBox: React.FC<IProps> = ({
  title,
  component,
  updateComponents,
}) => {
  return (
    <div className={styles.box} onClick={() => updateComponents(component)}>
      {title}
    </div>
  );
};

export default ComponentToolbarBox;
