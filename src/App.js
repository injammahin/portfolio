import Navber from "./components/Navber";
import HomeBar from "./components/HomeBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import MouseHover from "./components/Mousehover";
import Arrow from "./components/Arrow";
import FlashlightApp from "./components/FlashlightApp";
function App() {
  return (
    <div>
      <Navber />
      <HomeBar />
      <About />
      <Skills />
      <MouseHover />
      <Work />
      {/* <Arrow /> */}
      <FlashlightApp />
    </div>
  );
}

export default App;
