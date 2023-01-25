import React from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings, config } from 'react-spring';


function Card(props) {
    const [isOpen, setIsOpen] = useState(false);
    const heightRef = React.useRef(isOpen ? 'auto' : '0px');
    const widthRef = React.useRef(isOpen ? '98%' : '50%');
    const opacityRef = React.useRef(isOpen ? '1' : '0');
    const [isAnimating, setIsAnimating] = React.useState(false);
    const elementRef = React.useRef();
    const elementRef1 = React.useRef();
  
    function handleClickChange(props) {
      setIsOpen(val => !val);
      props.handleChange(props)
  }
  
    const [style, setStyle] = useSpring(() => ({
        onRest: () => setIsAnimating(false),
        config
      }))

      useEffect(() => {
        const { offsetHeight, offsetWidth, scrollHeight, scrollWidth, height } = elementRef.current;

        function handleResize() {
          setStyle.start({ height: (isOpen ? elementRef.current.querySelector('.content-wrapper').offsetHeight : 0) + 'px', immediate: true})
          props.handleChange(props)
        }
        setStyle.start({ height: (isOpen ? elementRef.current.querySelector('.content-wrapper').offsetHeight : 0) + 'px', immediate: false, delay: isOpen ? 250 : 0})
        setIsAnimating(true);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
      }, [elementRef, isOpen, setStyle])

    return (
        <animated.div ref={elementRef1} className={`card ${isOpen ? 'active ' : ''} ${props.className} `} id={props.id} onClick={() => handleClickChange(props)} >
            <div className='card-header'>
            <h2 className="card-title">{props.title}</h2>
            <p>{props.date}</p>
            </div>
            <div className='card-body'>
              <animated.div ref={elementRef} style={{
        height: isAnimating ? style.height : heightRef.current}}>
                {props.children}
                </animated.div>
                </div>
        </animated.div >    
    )
}

export default Card;