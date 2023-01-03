import React from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings } from 'react-spring';


function About() {
    const  [isPending, setPending] = useState(true);
    const  [Err, setErr] = useState(false);
    const [textprops, api2] = useSpring(
        () => ({
          from: { opacity: 0, position:'fixed'},
          to: { opacity: 1, position:'fixed'},
          delay: 500,
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
            <div className='header-wrapper about-wrapper'><h1>About</h1></div>
                <div className="content-body">
                   <p>Coming Soon!</p>  
                </div>  </animated.div>
            </div>
        )
}

export default About;