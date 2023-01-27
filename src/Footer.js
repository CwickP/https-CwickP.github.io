import React from "react";
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useEffect, useState, state } from 'react';
import { Link } from "react-router-dom";
import { animated, useSpring, easings } from 'react-spring';

const Footer = () => {
  
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
  
function Footer(){
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
return (      <div className='footer'>
  <animated.div style={props}>
  <div className='footer'>
    <ul className="icon-links">
      <li><a href='https://github.com/CwickP?tab=repositories' target="_blank" ><img src="/https-CwickP.github.io/img/github.svg" alt='github'></img></a></li>
      <li><a href="https://www.linkedin.com/in/chadwick-price-53378218/" target="_blank" ><img src="/https-CwickP.github.io/img/linkedin.svg" alt='linkedin'></img></a></li>
      <li><img src="/https-CwickP.github.io/img/youtube.svg"  alt='youttube'></img></li>
      <li><a href="mailto:cwickprice@gmail.com"><img src="/https-CwickP.github.io/img/email.svg" alt='contact' /></a></li>
    </ul>
    </div>
  </animated.div>
  
</div>


)
}

  return (
    <>
    <Footer />
    
    </>
  );
};
export default Footer;