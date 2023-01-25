import React, { useLayoutEffect } from 'react';
import { useState, state } from 'react';
import { useLocation, Link, NavLink } from "react-router-dom";
import {useEffect} from 'react';
import { animated, useSpring, easings } from 'react-spring';
import Card from './card';

function Work() {
    const  [isPending, setPending] = useState(true);
    const  [Err, setErr] = useState(false);
    const [currentCard , setCurrentCard] = useState('');
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
    const setCardIndex = (e) => {

        setDeviceOrientation(screen.orientation.type)
        setCurrentCard(e);
     }

     const determineContentHeight = () => {
        if(document.querySelector('.work-body-wrapper') !== null){
        if(window.matchMedia("(max-width: 576px)").matches){
            return document.documentElement.clientHeight - (document.querySelector('.work-body-wrapper').offsetTop+15+(document.querySelector('.nav-wrapper').offsetHeight+(document.querySelector('.nav-wrapper').getBoundingClientRect().y*2) ))
        }else{
            return document.documentElement.clientHeight - (document.querySelector('.work-body-wrapper').offsetTop+15)
        }
    }
     }

     useLayoutEffect(()=>{
        if( document.querySelector('.work-body-wrapper') !== null){
            if(document.querySelector('.work-body-wrapper') !== null){
                setDeviceOrientation(screen.orientation.type)
            }
        }
     })

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
        <div className='row justify-content-center h-100'>
        <div className="col-xs-2 col-sm-11 col-md-11 col-lg-10 px-4">
            <animated.div style={textprops}>
            
            <div className='header-wrapper'><h1>Work</h1>
            </div>
            <div className='work-body-wrapper work-wrapper px-4' style={{
        height: deviceOrientation === 'landscape-primary'|| deviceOrientation === 'landscape-secondary' ? document.documentElement.clientHeight - (document.querySelector('.work-body-wrapper').offsetTop+15) : determineContentHeight()}} >
                
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est velit. Donec pellentesque congue nunc, in mollis nisi porta id. Vivamus a pellentesque sapien. Integer ac posuere massa. Curabitur sit amet nisl rutrum, auctor elit non, euismod lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam blandit sapien id vulputate porta. Donec et purus dolor. Praesent eleifend lacinia scelerisque. Morbi justo turpis, condimentum et fringilla vulputate, placerat nec mi. Vestibulum semper, velit vel maximus posuere, turpis lectus interdum lectus, nec iaculis orci mauris sed nibh. Phasellus sit amet arcu faucibus, tempor justo at, dictum purus. Morbi sagittis arcu lorem, eget tincidunt metus posuere in. Aliquam in scelerisque lectus. Praesent malesuada nulla non nisi pellentesque commodo.</p>
                <div className='content-body'>
                   <div className='work-cards' >                    
                    <Card title="D2L" date="October 2012 - November 2022 " handleChange={setCardIndex} id="card0" >
                    <div className='content-wrapper'>
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
                    </div>
                    </Card>
                    <Card title="Research in Motion" date="March 2009 - August 2012" className="worklistItem" handleChange={setCardIndex} id="card1">
                    <div className='content-wrapper'>
                    <ol>
                    <li>Designed and developed reusable interactive animated course content modules using Adobe Flash.</li>
                    <li>Worked with subject matter experts and designers to assist in developing the interactive lesson content. This included designing and developing games, interactive chart and diagrams.</li>
                    </ol>
                    </div>
                    </Card>
                    <Card title="Corporate Communications Interactive" date="July 2003 - July 2007 " className="worklistItem" handleChange={setCardIndex} id="card2">
                    <div className='content-wrapper'>
                    <p><strong>Developer</strong></p>
                    <ol>
                    <li>Coded and developed educational courseware applications for web-based and computer-based environments, teaching users how to apply MS Office Programs and tools such as Outlook, Word and Excel. Created a series of modules based on user's experience level, from basic to advanced. Modified templates to increase productivity for all developers.</li>
                    </ol>
                    </div>
                    </Card>
                    <Card title="Navantis" date="August 2000 - February 2003" className="worklistItem" handleChange={setCardIndex} id="card3">
                        <div className='content-wrapper'>
                        <h3>Overview</h3>
                        <ol>
                            <li>Designed storyboards and flow charts according to business and usability requirements for internet, intranet, e-mail campaigns, and kiosks.</li>
                            <li>Designed and produced content management systems, internet, intranet and platform applications for medium to large organizations including the Government of Ontario, Honda/Acura, Microsoft and MSN.</li>
                            <li>Promoted to team manager</li>
                            <li>Created an internal developer resource site to help developers share/learn coding techniques.</li>
                        </ol>
                        <h4>Project Lists</h4>
                        <ul className='work-list'>
                            <li>
                                <h5>FamilyWave/Microsoft Home Magazine</h5>
                                <div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                                <img src="./img/familywave03.jpg" className='float-start' alt=''/>
                                <span>Designed and produced dynamic and interactive self contained Flash applications that integrated with the Microsoft Content Management Server environment. Built and deployed Content Management Server templates. The FamilyWave initiative was the first of a kind worldwide at the time.</span>
                                </div>
                            </li>
                            <li>
                                <h5>Honda Acura Canada</h5>
                                <div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                                    <img src="./img/Honda-Acura.jpg" className='float-start' alt=''/>
                                    <span>
                                        <p>Developed and deployed templates and managed content for internal and external Hond Acura sites. Involved with rebuilding the sites using the Microsoft Content Management Server</p>
                                        <p>Developed a 360 rotating car configurator componant that allowed users to customize the vehicle of their choice and supplied the price changes.</p>
                                        <p>The external sites helped the company win the Top Canadian Innovator Award by IDC in 2001.</p>
                                        <p>Developed mini-sites for specific car models, a Kiosk application for when you take your  vehicle in for repair or mainanance.</p>
                                        <p>Developed Honda Acura Product Guide sites for employees/dealers that provided detailed information and resources for every vehicle owned by the company.</p>
                                    </span>
                                </div>
                            </li>
                            <li>
                            <h5>Ontario Early Years Centres</h5>
                            <div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                                <img src='./img/Ontario_Early_Years.jpg' className='float-start' alt='' />
                                <span>
                                    <p>Stylized and deployed the Microsoft Content Management Server as well as Front-end and Back-end development.</p>
                                </span>
                            </div>
                            </li>
                            <li>
                                <h5>CIBC</h5>
                                <div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                                <img src='./img/CIBC.jpg' className='float-start' alt='' />
                                    <span>
                                        <p>Designed and created html email templates for a mass emailing system owned by CIBC</p>
                                        <p>Designed and developed marketing CD-ROM's for sales employees to take to current and potential clients</p>
                                        <p>Designed and developed an Online CIBC Business Banking services demo site that showcased the points and features of the online business banking services that are provided with CIBC  </p>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        </div>
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