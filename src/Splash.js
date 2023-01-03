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
          from: { opacity: 0,y:-100,transform:'scale(0.6)',rotate:0, y:80, x:50},
          to: { opacity: 1,y:-200,transform:'scale(1)', rotate:16, y:-200, x:-5},
          config: { 
             duration: "1000",
            tension: 170,
            mass: 1,
            friction: 2,
            velocity: 0,
            precision: 0.01
          }
        }),
        []
      )

      const [textprops, api2] = useSpring(
        () => ({
          from: { opacity: 0, position:'fixed'},
          to: { opacity: 1, position:'fixed'},
          delay: 500,
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
        
        fetch("https://raw.githubusercontent.com/CwickP/https-CwickP.github.io/44b9edd0558662cf50f4a3984bf9bc8f25e95232/videos.json")
        .then((res) => {
            if(!res.ok){
                setErr(true);
                throw Error('Could not load video list at this time');
            }
            return res.json()})
            .then((data) => {
                setPending(false);
               
            }).catch((err) => {
                console.log(err.message);
                setErr(true);
            })
           
        }, []);

        function Components(viddy,index){
            let number = Math.random() * 100;
            return (
                <Link to="/https-CwickP.github.io/VideoPlayer" key={number.toString()} state={{ data: {title: viddy.title, file: viddy.filename  }}} className="link">
                <div id={index} className="video-thumbs" data-file={viddy.filename} title={viddy.title} ><img src={viddy.thumb} width="100%"/><p>{viddy.title}</p></div>
                </Link>
                )
        }
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
        <div className="col-xs-2 col-sm-10 col-md-8 col-lg-8">
            <animated.div style={textprops}>
            <div className='header-wrapper'><h1 className='splash-header-1'>Chadwick Price</h1>
            <div className='col-12'>
                   <p className='ps-4'>Multimedia and Web Developer</p>
                   <h2 className='splash-header-2 ps-5'>Portfolio</h2>
                </div>
                
            </div>
            </animated.div>
                <animated.div style={props}><img className='logo-bg' src="/https-CwickP.github.io/img/logo_initials.svg" /></animated.div>
            </div>
        )
}

export default Splash;