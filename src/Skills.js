import React from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings } from 'react-spring';


function Skills() {
    const  [isPending, setPending] = useState(true);
    const  [Err, setErr] = useState(false);
    const [textprops, api2] = useSpring(
        () => ({
          from: { opacity: 0},
          to: { opacity: 1},
          delay: 0,
          config: { 
             duration: "500",
            tension: 170,
            mass: 1,
            friction: 6,
            velocity: 10,
            precision: 0.01
          }
        }),
        []
      )

     useEffect(() => {
        
        setPending(false);
           
        }, []);

        
            if(Err){
                return  <div className="col-xs-2 col-sm-12 col-md-12 col-lg-12">
                                <div className='err'>
                                    <div className='col-10 mx-auto err-wrapper'>
                                        <div className='err-container'>
                                            <img src='./img/error-icon-25266.png' />
                                            <p className='mx-auto'>Sorry there was a problem.</p>
                                            <p className='mx-auto'>Please try again!</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
            } else if(isPending && !Err){
                return <div className='loader'><div className='spinner-container'><div className="spinner-border" role="status" ></div></div></div>;
            }
      return (
        <div className="col-xs-2 col-sm-11 col-md-11 col-lg-11 mx-4">
            
             <animated.div style={textprops}>
            <div className='header-wrapper skills-wrapper'><h1>Skills & Experience</h1></div>
            <div className='body-wrapper'>
                <div className='content-body'>
                    <div className='list-wrapper'>
                   <ol className='skill-list'>
                    <li>User Interface Design</li>
                    <li>WCGAG 2.0 / WAI-ARIA Accessibility</li>
                    <li>Node.js</li>
                    <li>Gulp / Mammoth</li>
                    <li>Lint / Eslint</li>
                    <li>LitElement</li>
                    <li>AWS</li>
                    <li>HTML</li>
                    <li>XML / JSON</li>
                    <li>CSS / SCSS / SASS</li>
                    <li>JavaScript</li>
                    <li>ES6 / Typescript</li>
                    <li>Adobe Creative Suite</li>
                    <li>Expressions for After Effects</li>
                    <li>Video / Audio Editing</li>
                    <li>Angular</li>
                    <li>Reactjs</li>
                    <li>Threejs</li>
                    <li>FFMPEG</li>
                    <li>HLS / MPEG-DASH</li>
                    <li>JSFL / JSAPI / XMLUI</li>
                    <li>SQL</li>
                    <li>Quark.js</li>
                    <li>Vue.js</li>
                    <li>ASP / PHP</li>
                    <li>Visual Basic</li>
                    <li>Visual Studio Code</li>
                    <li>SCORM</li>
                    <li>aFrame</li>
                    <li>gsap</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>D2L Brightspace Valence API</li>
                   </ol>
                   <h2>Currently Studying or Upgrading</h2>
                   <ol className='learning-list'>
                    <li>Angular</li>
                    <li>Reactjs / Threejs</li>
                    <li>jest-dom</li>
                    <li>fluent-ffmpeg API</li>
                    <li>Unity</li>
                    <li>Unreal 5 Engine</li>
                    <li>Blender</li>
                    <li>Python</li>
                    <li>C++ / C#</li>
                    <li>AR / VR / XR</li>
                    <li>Figma</li>
                   </ol>
                   </div>
                </div></div>
                </animated.div>
                </div>
        )
}

export default Skills;