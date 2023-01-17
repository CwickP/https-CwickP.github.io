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

    function handleLangChange(props) {
      setIsOpen(val => !val)
      props.handleChange(props)
  }
      
    const [style, setStyle] = useSpring(() => ({
        onRest: () => setIsAnimating(false),
        config
      }))

      useEffect(() => {
        console.log("???")
        const { offsetHeight, offsetWidth, scrollHeight, scrollWidth, height } = elementRef.current;
        const { offsetHeight1, offsetWidth1, scrollHeight1, scrollWidth1 } = elementRef1.current;
        console.log(elementRef.current.scrollHeight)
        //setStyle.start({ height: offsetHeight + 'px', immediate: true})
        setStyle.start({ height: (isOpen ? elementRef.current.scrollHeight : 0) + 'px', immediate: false, delay: isOpen ? 250 : 0})
        setStyle.start({ width: (isOpen ? '90' :  '70') + '%', immediate: false, config: {
            tension: 180,
            friction: 12,
            duration: 200
          }})
        setStyle.start({ opacity: (isOpen ? 1 : 0), immediate: false, delay: isOpen ? 400 : 0, config: {
            tension: 180,
            friction: 12,
            duration:isOpen ? 500 : 0
          }});
        setIsAnimating(true)
        heightRef.current = isOpen ? elementRef.current.scrollHeight : '0px';
        widthRef.current = isOpen ? '90%' :  '70%';
        opacityRef.opacity = isOpen ? '1' : '0';
          
      }, [isOpen, setStyle])

    return (
        <animated.div ref={elementRef1} className={`card ${isOpen ? 'active ' : ''} ${props.className} `} id={props.id} onClick={() => handleLangChange(props)} style={{ width: isAnimating ? style.width : widthRef.current}}>
            <div className='card-header'>
            <h2 className="card-title">{props.title}</h2>
            <p>{props.date}</p>
            </div>
            <div className='card-body' style={{maxHeight: isOpen ? '60vh' : '90vh', padding: isOpen ? '': '0'}}>
              <animated.div ref={elementRef} style={{
                    overflow: 'hidden',
        height: isAnimating ? style.height : heightRef.current,
        opacity:isAnimating ? style.opacity : heightRef.opacity}}>
                {props.children}
                </animated.div>
                </div>
        </animated.div >    
    )
}

export default Card;