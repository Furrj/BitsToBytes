import React, { useState, useEffect } from "react";
import styles from "./ComponentToolbarBox.module.css";

//STATE
interface IProps {
  title: string;
  component: JSX.Element;
  activeComponents: JSX.Element[];
  updateActiveComponents: (component: JSX.Element) => void;
  restrictSpawn: boolean;
}

const ComponentToolbarBox: React.FC<IProps> = ({
  title,
  component,
  activeComponents,
  updateActiveComponents,
  restrictSpawn,
}) => {
  const [spawned, setSpawned] = useState<Boolean>(false);

  useEffect(() => {
    for (let el of activeComponents) {
      if (el.key === component.key) setSpawned(true);
    }
  }, []);

  const spawnedClassName: string =
    restrictSpawn && spawned ? styles.isSpawned : "";

  return (
    <div
      className={`${styles.box} ${spawnedClassName}`}
      onClick={() => {
        if (restrictSpawn && !spawned) {
          setSpawned(true);
          updateActiveComponents(component);
        } else if (!restrictSpawn) {
          setSpawned(true);
          updateActiveComponents(component);
        }
      }}
    >
      {title}
    </div>
  );
};

export default ComponentToolbarBox;
