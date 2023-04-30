import React, { useState } from "react";
import styles from "./ComponentToolbar.module.css";

//COMPS
import ComponentToolbarBox from "./ComponentToolbarBox";

//STATE
interface IProps {
  components: JSX.Element[];
  updateComponents: (component: JSX.Element) => void;
}

const ComponentToolbar: React.FC<IProps> = ({
  components,
  updateComponents,
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
          <div onClick={() => setOpen(false)}>Collapse</div>
          <ComponentToolbarBox
            title="RAM"
            component={components[0]}
            updateComponents={updateComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Accumulator"
            component={components[1]}
            updateComponents={updateComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Control Panel"
            component={components[2]}
            updateComponents={updateComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Terminal"
            component={components[3]}
            updateComponents={updateComponents}
            restrictSpawn={true}
          />
          <ComponentToolbarBox
            title="Output"
            component={components[4]}
            updateComponents={updateComponents}
            restrictSpawn={true}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ComponentToolbar;
