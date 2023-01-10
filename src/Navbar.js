import React from "react";
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useEffect, useState, state } from 'react';
import { Link } from "react-router-dom";
import { animated, useSpring, easings } from 'react-spring';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  useEffect(() => {
    setTimeout(function(){
      setIsCancel(true);
    },500)
   }, []);
  
function Header(){
  const [isCancel, setIsCancel] = useState(false);
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0},
      to: { opacity: 1},
      delay: 500,
      config: { 
         duration: "500",
        tension: 170,
        mass: 1,
        friction: 2,
        velocity: 0,
        precision: 0.01
      },
    cancel: isCancel
    }),
    []
  )
return (      <div className='col-xs-12 col-sm-1 col-md-1 col-lg-1 mx-4 my-4 align-self-stretch'>
  <animated.div style={props}>
<nav className="navbar bg-dark">
    <ul className="navbar-nav ">
    <li className="nav-item mr-auto my-auto px-0">
        <Link className="nav-link navbar-brand" to="/https-CwickP.github.io/"><img src="/https-CwickP.github.io/img/CP_logo.svg" width="49px" height="105px" alt="image of logo links to home page"/></Link>
      </li>
      <li className="nav-item mr-auto my-auto">
        <Link className="nav-link" to="/https-CwickP.github.io/About">About</Link>
      </li>
      <li className="nav-item mr-auto my-auto">
        <Link className="nav-link mr-auto my-auto" to="/https-CwickP.github.io/Skills">Skills</Link>
      </li>
      <li className="nav-item mr-auto my-auto">
        <Link className="nav-link" to="/https-CwickP.github.io/Work">Work</Link>
      </li>
      <li className="nav-item mr-auto my-auto">
        <Link className="nav-link" to="/https-CwickP.github.io/Contact">Contact</Link>
      </li>
    </ul>
  </nav></animated.div>
</div>


)
}

  return (
    <>
    <Header />
    
    </>
  );
};
export default Navbar;