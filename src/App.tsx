import React from "react";

//COMPS
import RAM from "./components/RAM/RAM";
import Change from "./components/Interfaces/Change";

//DATA
import DataHandler from "./data/DataHandler";

//INIT
const dataHandler = new DataHandler();

const App: React.FC = () => {
  return (
    <div className="App">
      <RAM dataHandler={dataHandler} />
      <Change />
    </div>
  );
};

export default App;
