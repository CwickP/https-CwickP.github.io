import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import Splash from './Splash';
import VideoPlayer from './VideoPlayer';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Music from './Music';
import Navbar from './Navbar';
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className={`App`}>
      <Navbar/>
        <Content />
      </div>
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    console.log(document.querySelector('.header-wrapper'))
    if(document.querySelector('.header-wrapper') !==null){
      document.querySelector('.header-wrapper').classList.remove('hide');
      document.querySelector('.nav-wrapper').classList.remove('hide');
      }
    if (location !== displayLocation) setTransistionStage("fadeOut");
    if (location !== displayLocation) setTransistionStage("fadeOut");
       
  }, [location]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
      <Route exact path="/https-CwickP.github.io/" element={<Splash/>} />
        <Route exact path="/https-CwickP.github.io/About" element={<About />} />
        <Route exact path="/https-CwickP.github.io/Skills" element={<Skills />} />
        <Route exact path="/https-CwickP.github.io/Work" element={<Work />} />
        <Route exact path="/https-CwickP.github.io/Contact" element={<Contact />} />
        <Route exact path="/https-CwickP.github.io/Music" element={<Music />} />
      </Routes>
    </div>
  );
}
