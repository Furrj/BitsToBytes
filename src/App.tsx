import React from "react";

//COMPS
import RAM from "./components/RAM/RAM";
import Change from "./components/Interfaces/Change";

const App: React.FC = () => {
  return (
    <div className="App">
      <RAM />
      <Change />
    </div>
  );
};

export default App;
