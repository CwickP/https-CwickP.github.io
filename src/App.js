import logo from './logo.svg';
import './App.css';
import Video from './Video';
import VideoPlayer from './VideoPlayer';
import Music from './Music';
import Navbar from './Navbar';
import { useState, state } from 'react';
import {Route, Link, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { gsap, Power1} from 'gsap';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.from('.logo', 1, {
     y: 100,
     opacity: 0,
     stagger: { 
      each: 0.67 
     }
    }).to('.logo', 1, {
      opacity: 0,
      stagger: { 
       each: 0.67 
      },
      delay: 3
     }).eventCallback("onComplete", setLoading, false);
   }, []);

  if(loading){
    return <div className='logo-container'><div className='logo-wrapper'><h1 className='logo'>CPFLIX</h1></div></div>

  }else{

  return (
    
    <div className="App" >
      
      <Router>
        <Navbar className="navvy" />
      <Routes>
        <Route exact path="/https-CwickP.github.io/" element={<Video/>} />
        <Route exact path="/https-CwickP.github.io/VideoPlayer" element={<VideoPlayer />} />
        <Route exact path="/https-CwickP.github.io/Music" element={<Music />} />
      </Routes> 
      </Router>

    </div>
  );
  }
}

export default App;
