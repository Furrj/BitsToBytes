import React from "react";

//COMPS
import RAM from "./components/RAM/RAM";
import Change from "./components/Interfaces/Change";
import Accumulator from "./components/Registers/Accumulator";

const App: React.FC = () => {
  return (
    <div className="App">
      <RAM />
      <Change />
      <Accumulator />
    </div>
  );
};

export default App;
