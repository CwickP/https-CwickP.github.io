import React from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings } from 'react-spring';


function Splash() {
    const  [isPending, setPending] = useState(true);
    const  [Err, setErr] = useState(false);

    const [props, api] = useSpring(
        () => ({
          from: { opacity: 0},
          to: { opacity: 1},
          config: { 
             duration: "1000",
            tension: 170,
            mass: 1,
            friction: 6,
            velocity: 120,
            precision: 0.01
          }
        }),
        []
      )

      const [textprops, api2] = useSpring(
        () => ({
          from: { opacity: 0},
          to: { opacity: 1},
          config: { 
             duration: "1500",
            tension: 170,
            mass: 1,
            friction: 6,
            velocity: 120,
            precision: 0.01
          }
        }),
        []
      )


     useEffect(() => {
       
        setPending(false);
        }, []);

            if(Err){
                return  <div className="col-xs-2 col-sm-10 col-md-12 col-lg-12">
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
        <div className="col-xs-2 col-sm-12 col-md-12 col-lg-12 mx-4">
            <animated.div style={textprops}>
            <div className='splash-header-wrapper'><h1 className='splash-header-1'>Chadwick Price</h1>
            <div className='col-12'>
                   <p className='role-title ps-4'>Multimedia and Web Developer</p>
                   <h2 className='splash-header-2 ps-5'>Portfolio</h2>
                </div>
                
            </div>
            </animated.div>
                <animated.div style={props}><img alt='' className='logo-bg' src="/https-CwickP.github.io/img/logo_initials.svg" /></animated.div>
            </div>
        )
}

export default Splash;