import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LongTerm from "./components/LongTerm";
import Agile from "./components/Agile";
import Team from "./components/Team";

function App() {
  return (
    <>
      <LongTerm />
      <Agile />
      <Team />
    </>
  );
}

export default App;
