import CeoList from "./components/CeoList";
import AddCeo from "./components/AddCeo";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const [reload, setReload] = useState(false);

  const handleReload = (status) => {
    setReload(status);
  };

  return (
    <div className="App">
      <header className="App-header">APPLE CEOs</header>
      <AddCeo handleReload={handleReload} />
      <Router>
        <CeoList reload={reload} />
      </Router>
    </div>
  );
}

export default App;
