import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topheader from './Components/Includes/Topheader';
import Home from './Components/Home/Home';
// import FixedIcons from './Components/Includes/FixedIcons';
import Footer from './Components/Includes/Footer';
import About from './Components/Includes/About';
import QuietEarth from './Components/InThatQuietEarth/QuietEarth.jsx';
import Pursuit from './Components/Pusuit/Pursuit';
import Windmill from './Components/Windmill/Windmill';
import Rain from './Components/AfterTheRain/Rain';
import LearningFly from './Components/LearningToFly/LearningFly';
import MagicTree from './Components/TheMagicFarawayTree/MagicTree';
// import Workations from './Components/TotalEnvironmentWorkations/Workations';
import Contact from './Components/Includes/Contact';
import Workations from './Components/TotalEnvironmentWorkations/Workations';
import WorkcationsYelhanka from './Components/Workcations-Yelhanka/WorkcationsYelhanka';

function App() {
  return (
    <Router>
    <Topheader />
    <Routes>
      {/* <Route path="/" index element={<Home />}></Route> */}
      {/* <Route path="/about" element={<About />}></Route> */}
      <Route path="/" element={<QuietEarth />}></Route>      
      {/* <Route path="/projects/pursuit" element={<Pursuit />}></Route>            */}
      {/* <Route path="/projects/windmill" element={<Windmill />}></Route>      
      <Route path="/projects/rain" element={<Rain />}></Route>    
      <Route path="/projects/learning-fly" element={<LearningFly />}></Route>      
      <Route path="/projects/magic-tree" element={<MagicTree />}></Route> 
      <Route path="/projects/workations-whitefiled" element={<Workations />}></Route>      
      <Route path="/projects/workations-yelhanka" element={<WorkcationsYelhanka />}></Route>
      <Route path="/contact" element={<Contact />}></Route> */}
    </Routes>  
    {/* <FixedIcons /> */}
    <Footer />
</Router>
  );
}

export default App;
