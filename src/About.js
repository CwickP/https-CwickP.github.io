import React from 'react';
import { Suspense } from 'react'
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings } from 'react-spring';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls, Environment } from '@react-three/drei';
import Loader from './model_Loader';
import Model from './me';

function About() {
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
                return  <div className="col-xs-2 col-sm-10 col-md-8 col-lg-8">
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
            console.log(window.loaded)
      return (
        <div className="col-xs-2 col-sm-11 col-md-11 col-lg-11 mx-4">
             <animated.div style={textprops}>
            <div className='header-wrapper about-wrapper'><h1>About</h1></div>
                <div className="content-body">
                   <p>I am an initiative-taking and progress-driven Multimedia and Web Developer with over 18 years of experience in the industry.</p>
                    <p>I enjoy finding creative solutions to eliminate obstacles. I’m highly adept at managing competing priorities and establishing clear deadlines</p> 
                </div> 
                <div className='canvas-wrapper'>
                <Canvas>
                <Suspense fallback={<Loader />}>
                <ambientLight />
                <directionalLight position={[-5, 5, 5]} />
                <pointLight position={[0, 0, 0]} />
                <Environment
            background={true}
            files={['./3D/NewLevelSequence.FinalImage.NewLevelSequence.0000.hdr']}
            path={'/'}
            preset={'sunset'}
          />
                <Model/>
                </Suspense>
                </Canvas>
                </div>
                </animated.div>
                
            </div>
        )
}

export default About;