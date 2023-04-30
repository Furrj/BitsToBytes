import React, { useState } from "react";
import styles from "./ComponentToolbar.module.css";

//COMPS
import ComponentToolbarBox from "./ComponentToolbarBox";

//STATE
interface IProps {
  components: JSX.Element[];
  activeComponents: JSX.Element[];
  updateActiveComponents: (component: JSX.Element) => void;
}

const ComponentToolbar: React.FC<IProps> = ({
  components,
  activeComponents,
  updateActiveComponents,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toolbarOpenClassName: string = open ? styles.toolbarOpen : "";

  return (
    <div
      className={`${styles.toolbar} ${toolbarOpenClassName}`}
      onClick={() => {
        if (!open) setOpen(true);
      }}
    >
      {open ? (
        <div className={styles.boxContainer}>
          <div onClick={() => setOpen(false)}>
            <i className="fa-solid fa-arrow-left-long" />
          </div>
          <ComponentToolbarBox
            title="RAM"
            component={components[0]}
            activeComponents={activeComponents}
            updateActiveComponents={updateActiveComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Accumulator"
            component={components[1]}
            activeComponents={activeComponents}
            updateActiveComponents={updateActiveComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Control Panel"
            component={components[2]}
            activeComponents={activeComponents}
            updateActiveComponents={updateActiveComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Terminal"
            component={components[3]}
            activeComponents={activeComponents}
            updateActiveComponents={updateActiveComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Output"
            component={components[4]}
            activeComponents={activeComponents}
            updateActiveComponents={updateActiveComponents}
            restrictSpawn={true}
          />
        </div>
      ) : (
        <i className="fa-solid fa-arrow-up-right-from-square" />
      )}
    </div>
  );
};

export default ComponentToolbar;
