import React, { useState } from "react";

//COMPS
import RAM from "./components/RAM/RAM";
import Accumulator from "./components/Registers/Accumulator";
import ComponentToolbar from "./components/UI/ComponentToolbar";
import ControlPanel from "./components/Interfaces/ControlPanel";
import InstructionInput from "./components/Interfaces/InstructionInput";

const initState: JSX.Element[] = [];

const App: React.FC = () => {
  const [activeComponents, setActiveComponents] =
    useState<JSX.Element[]>(initState);

  const components: JSX.Element[] = [
    <RAM key={0} />,
    <Accumulator key={1} />,
    <ControlPanel key={2} />,
    <InstructionInput key={3} />,
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
      <ControlPanel />
      <InstructionInput />
      <ComponentToolbar
        components={components}
        updateComponents={updateActiveComponents}
      />
    </div>
  );
};

export default App;
