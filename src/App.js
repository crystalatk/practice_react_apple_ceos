import CeoList from "./components/CeoList";
import CeoDetails from "./components/CeoDetails";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <CeoList />
      </Router>
    </div>
  );
}

export default App;
