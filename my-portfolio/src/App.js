import { BrowserRouter } from "react-router-dom";
import Navbar  from "./components/navbar";
import Home from "./components/home";
import About from "./components/about"
import Project from "./components/project";
import Contact from "./components/contact";
function App() {
  return (
    <BrowserRouter>
      <div className="full">
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
