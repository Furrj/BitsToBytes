import React from "react";

//COMPS
import RAM from "./components/RAM/RAM";

//DATA
import DataHandler from "./data/DataHandler";

//INIT
const data = new DataHandler();

const App: React.FC = () => {
  return (
    <div className="App">
      <RAM data={data} />
    </div>
  );
};

export default App;
