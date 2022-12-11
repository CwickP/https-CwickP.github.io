import React from "react";
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { gsap, Power1} from 'gsap';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  let location = useLocation();

  useEffect(() => {
     let textAnimation2 = gsap.timeline();
     textAnimation2.set('.navbar', {autoAlpha : 0})
     textAnimation2.from('.navbar', 1, {
      y: -100,
      autoAlpha : 0
     })
   }, []);
  
function Header(){
    if(window.loaded){
       setTimeout(function(){
      document.querySelector('.navbar').style.visibility = 'visible'
    }, 0)
      let textAnimation2 = gsap.timeline();
     textAnimation2.set('.navbar', {autoAlpha : 0})
     textAnimation2.from('.navbar', 1, {
      y: -100,
      autoAlpha : 0
     })
    }
    window.loaded = true
return (<nav className="navbar navbar-expand-lg navbar-dark">
<a className="" href="/https-CwickP.github.io/">CPFLIX</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/https-CwickP.github.io/" >
        Videos
      </NavLink>
      <NavLink style={navLinkStyles} to="/https-CwickP.github.io/Music" >
        Music
      </NavLink>
    </nav>
    </li>
  </ul>
</div>
</nav>)
}

  return (
    <>
    <Header />
    
    </>
  );
};
export default Navbar;