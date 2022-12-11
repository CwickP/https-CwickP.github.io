import React from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { gsap, Power1} from 'gsap';


function Music() {
    const  [videos, setVideos] = useState(null);
    const  [isPending, setPending] = useState(true);
    const  [Err, setErr] = useState(false);

     useEffect(() => {
        
        fetch("http://192.168.0.12:8000/videolist")
        .then((res) => {
            if(!res.ok){
                setErr(true);
                throw Error('Could not load video list at this time');
            }
            return res.json()})
            .then((data) => {
                setPending(false);
                setVideos(data);
                setTimeout(function(){
               let textAnimation3 = gsap.timeline();
                textAnimation3.from('.text-center', 1, {
                    autoAlpha: 0,
                 delay: 0.5
                });

                let textAnimation4 = gsap.timeline();
                textAnimation4.from('.header-wrapper', 1, {
                    autoAlpha: 0,
                 delay: 0.5
                }) 
            }, 0)
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
                return  <div className="container">
                            <div className="row">
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
                                </div>
            } else if(isPending && !Err){
                return <div className='loader'><div className='spinner-container'><div className="spinner-border" role="status" ></div></div></div>;
            }
    
      return (
        <div className="container">
        <div className="row">
            <div className='col-10 mx-auto header-wrapper'><h1>Music</h1></div>
                <div className='col-10 mx-auto'>
                   <p className='text-center'>Coming Soon!</p>  
                </div>
            </div>
        </div>
        )
}

export default Music;