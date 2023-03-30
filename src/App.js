import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Featured from "./components/Featured";
import Integer from "./components/Integer";
import AllVipeStudio from "./components/AllVipeStudio";

function App() {
  return (
    <>
      <div className="d-flex flex-column h_xl_100 vh_100 overflow-hidden">
        <NavBar />
        <HeroSection />
      </div>
      <Featured />
      <Integer />
      <AllVipeStudio />
    </>
  );
}

export default App;
