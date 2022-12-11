import React from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { gsap, Power1} from 'gsap';

function VideoPlayer() {
    let location = useLocation();
        function Video(video) {
        return (<div><video key={video.title} width="100%" controls src={video.src} type="video/mp4" autoPlay  /></div>
        )
    }

    useEffect(() => {
        setTimeout(function(){
            let textAnimation3 = gsap.timeline();
             textAnimation3.from('.video-wrapper', 1, {
                 autoAlpha: 0,
                delay: 0.5
             });

             let textAnimation4 = gsap.timeline();
             textAnimation4.from('.header-wrapper', 1, {
                 autoAlpha: 0,
              delay: 0.5
             });
         }, 0)
        }, []);
    
    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-10 col-md-12 col-sm-12  mx-auto'>
                    <div className='col-11 mx-auto header-wrapper video-container'></div>
                    <div className='col-12 mx-auto video-wrapper mb-2'>
                        <Video src={location.state.data.file} title={location.state.data.title}/>
                        <div className='movie-title'>{location.state.data.title}</div>
                        <Link to="/https-CwickP.github.io/" className="link-to-home">Back To Menu</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;