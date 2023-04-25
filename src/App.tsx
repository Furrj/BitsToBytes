import React, { useState } from "react";

//COMPS
import RAM from "./components/RAM/RAM";
import Change from "./components/Interfaces/Change";
import Accumulator from "./components/Registers/Accumulator";
import ComponentToolbar from "./components/UI/ComponentToolbar";
import ControlPanel from "./components/Interfaces/ControlPanel";

const initState: JSX.Element[] = [<ControlPanel />];

const App: React.FC = () => {
  const [activeComponents, setActiveComponents] =
    useState<JSX.Element[]>(initState);

  const components: JSX.Element[] = [
    <RAM />,
    <Accumulator />,
    <ControlPanel />,
  ];

  function updateActiveComponents(component: JSX.Element): void {
    const newState: JSX.Element[] = [...activeComponents];
    newState.push(component);
    setActiveComponents(newState);
  }

  return (
    <div className="App">
      {activeComponents.map((component) => {
        return component;
      })}
      <Change />
      <ComponentToolbar
        components={components}
        updateComponents={updateActiveComponents}
      />
    </div>
  );
};

export default App;
