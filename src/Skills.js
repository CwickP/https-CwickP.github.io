import React from 'react';
import { useState, state } from 'react';
import {useEffect, useLayoutEffect} from 'react';
import { animated, useSpring } from 'react-spring';


function Skills() {
    const  [isPending, setPending] = useState(true);
    const  [Err, setErr] = useState(false);
    const [deviceOrientation, setDeviceOrientation] = useState('');
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

      const determineContentHeight = () => {
        console.log(document.querySelector('.body-wrapper'))
        if(document.querySelector('.body-wrapper') !== null){
        if(window.matchMedia("(max-width: 576px)").matches){
            return document.documentElement.clientHeight - (document.querySelector('.body-wrapper').offsetTop+document.querySelector('.footer').offsetHeight+15+(document.querySelector('.nav-wrapper').offsetHeight+(document.querySelector('.nav-wrapper').getBoundingClientRect().y*2) ))
        }else{
            return document.documentElement.clientHeight - (document.querySelector('.body-wrapper').offsetTop+document.querySelector('.footer').offsetHeight+15)
        }
    }
     }

      useLayoutEffect(()=>{
        
        if( document.querySelector('.body-wrapper') !== null){
            if(document.querySelector('.body-wrapper') !== null){
                setDeviceOrientation(screen.orientation.type)
            }
        }
     })

     useEffect(() => {
        function handleResize() {
           //setDeviceOrientation(screen.orientation.type)
           setTimeout(function(){
            setDeviceOrientation(screen.orientation.type);
            console.log(screen.orientation.type)
           },250)
          }

        setPending(false);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
           
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
        <div className='main row justify-content-center h-100'>
        <div className="col-xs-2 col-sm-11 col-md-11 col-lg-10 px-4">
            
             <animated.div style={textprops}>
            <div className='header-wrapper skills-wrapper'><h1>Skills & Experience</h1></div>
            <div className='body-wrapper' style={{
        maxHeight: deviceOrientation === 'landscape-primary'|| deviceOrientation === 'landscape-secondary' ? document.documentElement.clientHeight - (document.querySelector('.body-wrapper').offsetTop+document.querySelector('.footer').offsetHeight+15) : determineContentHeight()}} >
                <div className='content-body'>
                    <div className='list-wrapper'>
                   <ol className='skill-list'>
                    <li>User Interface Design</li>
                    <li>WCGAG 2.0 / WAI-ARIA Accessibility</li>
                    <li>D3</li>
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
                    <li>Jira / Confluence</li>
                    <li>Salesforce</li>
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
                </div>
        )
}

export default Skills;