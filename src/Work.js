import React from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings } from 'react-spring';
import Card from './card';

function Work() {
    const  [isPending, setPending] = useState(true);
    const  [Err, setErr] = useState(false);
    const [currentCard , setCurrentCard] = useState('');
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

    const setCardIndex = (e) => {
        console.log(e);
        setCurrentCard(e);        
     }

     useEffect(() => {
        setPending(false);
        if(document.querySelectorAll('.card:not(.active)') !== null){
            document.querySelectorAll('.card').forEach((card) =>{
                if(card.classList.contains('active')){
                    card.classList.remove('hide');
                    document.querySelector('.header-wrapper').classList.add('hide');
                    document.querySelector('.nav-wrapper').classList.add('hide');
                    document.querySelector('.work-body-wrapper').classList.add('work-body-wrapper-100vhvw');
                    document.querySelector('.work-cards').classList.add('height-100vh');
                    document.querySelector('.content-body').classList.add('fullheight');
                }else {
                    if(document.querySelector('.active') === null){
                        card.classList.remove('hide');
                        document.querySelector('.header-wrapper').classList.remove('hide');
                        document.querySelector('.nav-wrapper').classList.remove('hide');
                        document.querySelector('.work-body-wrapper').classList.remove('work-body-wrapper-100vhvw');
                        document.querySelector('.work-cards').classList.remove('height-100vh');
                        document.querySelector('.content-body').classList.remove('fullheight');
                    }else{
                        card.classList.add('hide')
                    }
                }
            })
        }
               
        }, [currentCard]);

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
        <div className='row'>
        <div className="col-xs-2 col-sm-11 col-md-11 col-lg-12">
            <animated.div style={textprops}>
            
            <div className='header-wrapper work-wrapper'><h1>Work</h1>
            <p>Coming Soon!</p>
            </div>
            <div className='work-body-wrapper'>
                <div className='content-body'>
                  
                   <div className='work-cards' >                    
                    <Card title="D2L" date="October 2012 - November 2022 " handleChange={setCardIndex} id="card0" >
                    <p><strong>Web Developer, Learning Services</strong> <br/><strong>From:</strong> February 2022 – November 2022 </p>
                    <ol>
                        <li>Designed tools and course homepage widgets that are integrated into the D2L Learning Platform.</li>
                        <li>Developed D2L Creator+ tools, allowing instructors to author fully accessible advanced media and interactive content from practice activities to interactive elements such as accordions, flip cards, etc. without having to touch any code.</li>
                        <li>Enhanced Content Styler tool, enabling clients to set global course content styles.</li>
                        <li>Created fully accessible templates that support the Content Styler tool and the rest of the Creator+ tools.</li>
                        <li>Triaged defect and feature requests and developed fixes.</li>
                    </ol>
                    <p><strong>Multimedia Developer, Creative and Learning Services</strong><br/><strong>From: </strong>October 2012 – February 2022</p>
                    <ol>
                        <li>Developed custom interactive course content, custom tools and widgets for clients.</li>
                        <li>Video and audio development including creating reusable video templates coded with After Effects Expressions scripting language to load external content, auto adjust animations and layouts according to its content size and automate repetitive tasks.</li>
                        <li>Created interactive video content for quizzing the user throughout the video, blended learning scenarios, etc.</li>
                        <li>Developed reusable interactive SCORM assessment content such as branching scenarios, hot spot activities, fill in the blanks, true and false, multiple choice, etc.</li>
                        <li>Worked on large course development projects to help the courseware developers meet their targets on tight deadlines. This included creating content with rapid development software such as Adobe Captivate, Articulate Storyline and Twine(https://twinery.org/) with SCORM 1.2 and SCORM 2004 and deploying them on the D2L Brightspace LMS ensuring that grades, etc. are tracked within the LMS course.</li>
                    </ol>
                    </Card>
                    <Card title="Research in Motion" date="March 2009 - August 2012" className="worklistItem" handleChange={setCardIndex} id="card1">
                    <ol>
                    <li>Designed and developed reusable interactive animated course content modules using Adobe Flash.</li>
                    <li>Worked with subject matter experts and designers to assist in developing the interactive lesson content. This included designing and developing games, interactive chart and diagrams.</li>
                    </ol>
                    </Card>
                    <Card title="Corporate Communications Interactive" date="July 2003 - July 2007 " className="worklistItem" handleChange={setCardIndex} id="card2">
                    <p><strong>Developer</strong></p>
                    <ol>
                    <li>Developed SCORM based educational courseware applications for web-based and computer-based environments.</li>
                    </ol>
                    </Card>
                    <Card title="Navantis" date="August 2000 - February 2003" className="worklistItem" handleChange={setCardIndex} id="card3">
                        <h3>Overview</h3>
                        <ol>
                            <li>Designed storyboards and flow charts according to business and usability requirements for internet, intranet, e-mail campaigns, and kiosks.</li>
                            <li>Designed and produced content management systems, internet, intranet and platform applications for medium to large organizations including the Government of Ontario, Honda/Acura, Microsoft and MSN.</li>
                            <li>Promoted to team manager</li>
                            <li>Created an internal developer resource site to help developers share/learn coding techniques.</li>
                        </ol>
                        <h4>Project Lists</h4>
                        <ul>
                            <li>
                                <p><strong>FamilyWave/Microsoft Home Magazine</strong></p>
                                <div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                                <img src="./img/familywave03.jpg" className='float-start me-3 h-100'/>
                                <span>Designed and produced dynamic and interactive self contained Flash applications that integrated with the Microsoft Content Management Server environment. Built and deployed Content Management Server templates. The FamilyWave initiative was the first of a kind worldwide at the time.</span>
                                </div>
                            </li>
                            <li>
                                <p><strong>Honda Acura Canada</strong></p>
                                <div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                                    <img src="./img/Honda-Acura.jpg" className='float-start me-3 h-100'/>
                                    <span>
                                        <p>Developed and deployed templates and managed content for internal and external Hond Acura sites. Involved with rebuilding the sites using the Microsoft Content Management Server</p>
                                        <p>Developed a 360 rotating car configurator componant that allowed users to customize the vehicle of their choice and supplied the price changes.</p>
                                        <p>The external sites helped the company win the Top Canadian Innovator Award by IDC in 2001.</p>
                                        <p>Developed mini-sites for specific car models, a Kiosk application for when you take your  vehicle in for repair or mainanance.</p>
                                        <p>Developed Honda Acura Product Guide sites for employees/dealers that provided detailed information and resources for every vehicle owned by the company.</p>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </Card>
                   </div>
                </div>
                </div>
                </animated.div>
            </div>
            </div>
            
        )
}

export default Work;