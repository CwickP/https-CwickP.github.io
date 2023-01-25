import React from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings } from 'react-spring';

function Contact() {
    const  [videos, setVideos] = useState(null);
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
            console.log(window.loaded)
      return (
        <div className='row justify-content-center h-100'>
        <div className="col-xs-2 col-sm-11 col-md-11 col-lg-10 px-4">
            <animated.div style={textprops}>
            <div className='header-wrapper contact-wrapper'>
                <h1>Contact</h1></div>
                <div className='body-wrapper'>
                <div className='content-body'>
                   <ul className='contact-list'>
                    <li><span>Email:</span> <a href="mailto:cwickprice@gmail.com">cwickprice@gmail.com</a></li>
                    <li><a href='https://github.com/CwickP?tab=repositories' target="_blank" ><img src="/https-CwickP.github.io/img/github.svg" alt='github'></img>Github - more to be added soon!</a></li>
                    <li><a href="https://www.linkedin.com/in/chadwick-price-53378218/" target="_blank" ><img src="/https-CwickP.github.io/img/linkedin.svg" alt='linkedin'></img> linkedIn</a></li>
                    <li><img src="/https-CwickP.github.io/img/youtube.svg"  alt='youttube'></img>YouTube - coming soon!</li>
                   </ul>
                </div>
                </div>
                </animated.div>
            </div>
            </div>
        )
}

export default Contact;