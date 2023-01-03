import logo from './logo.svg';
import './App.css';
import Splash from './Splash';
import VideoPlayer from './VideoPlayer';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Music from './Music';
import Navbar from './Navbar';
import { useState, state } from 'react';
import {Route, Link, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

   }, []);
  if(loading){
    console.log(window)
    return <div className='logo-container'><div className='logo-wrapper'><img className='logo' src="/https-CwickP.github.io/img/CP_logo.svg" width="71px" height="151px"/></div></div>

  }else{

  return (
    
    <div className="App container-fluid min-vh-100" >
      <div className='row'>
      <Router>
        <Navbar className="navvy" />
      <Routes>
        <Route exact path="/https-CwickP.github.io/" element={<Splash/>} />
        <Route exact path="/https-CwickP.github.io/About" element={<About />} />
        <Route exact path="/https-CwickP.github.io/Skills" element={<Skills />} />
        <Route exact path="/https-CwickP.github.io/Work" element={<Work />} />
        <Route exact path="/https-CwickP.github.io/Contact" element={<Contact />} />
        <Route exact path="/https-CwickP.github.io/Music" element={<Music />} />
      </Routes> 
      </Router>
      </div>
    </div>
  );
  }
}

export default App;
