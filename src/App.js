import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LongTerm from "./components/LongTerm";
import Agile from "./components/Agile";
import Team from "./components/Team";
import Success from "./components/Success";
import { Card } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <LongTerm />
      <Agile />
      <Team />
      <Success />
      <Card />
      <Footer />
    </>
  );
}

export default App;
