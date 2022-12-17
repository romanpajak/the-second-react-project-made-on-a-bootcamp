import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";

function App() {
  return (
    <div className="container">
      <FirstRow />
      <SecondRow />
    </div>
  );
}

export default App;
