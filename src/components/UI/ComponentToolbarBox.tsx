import React, { useState } from "react";
import styles from "./ComponentToolbarBox.module.css";

//STATE
interface IProps {
  title: string;
  component: JSX.Element;
  updateComponents: (component: JSX.Element) => void;
  restrictSpawn: boolean;
}

const ComponentToolbarBox: React.FC<IProps> = ({
  title,
  component,
  updateComponents,
  restrictSpawn,
}) => {
  const [spawned, setSpawned] = useState<boolean>(false);

  const spawnedClassName: string =
    restrictSpawn && spawned ? styles.isSpawned : "";

  return (
    <div
      className={`${styles.box} ${spawnedClassName}`}
      onClick={() => {
        if (restrictSpawn && !spawned) {
          setSpawned(true);
          updateComponents(component);
        } else if (!restrictSpawn) {
          setSpawned(true);
          updateComponents(component);
        }
      }}
    >
      {title}
    </div>
  );
};

export default ComponentToolbarBox;
