import React, { useEffect, useRef } from 'react';
import '../secondary.css';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import portrait from '../images/portraitAdj.jpg'
import python from '../images/python.jpg'
import java from '../images/java.jpg'
import react from '../images/react.jpg'
import bootstrap from '../images/bootstrap.jpg'

const Second = () => {

    return (
        <div>
            <div className='landing-container'>
                <h1 align="right">Ahoy, I'm <strong>Eric Fallon</strong></h1>
                <h3 align="right">Web developer, brewer, climber, skier, <br></br>and resident insect/reptile expert</h3>
            </div>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary navbar">
                <Nav.Link href='#Home' className='navlink'>Home</Nav.Link>
                <Nav.Link href='#About' className='navlink'>About</Nav.Link>
                <Nav.Link href='#Portfolio' className='navlink'>Portfolio</Nav.Link>
                <Nav.Link href='#Contact' className='navlink'>Contact</Nav.Link>
            </Navbar>
            <div className='body-container show'>
                    <div className='home-left'>
                        <div className='diamond'><img className="portrait" src={portrait}/></div>
                        <p className='portrait-desc'>I am a web developer from San Diego, Ca.  I am passionate about and eager to learn all things coding, and enjoy finding creative solutions to real world problems.</p>
                    </div>
                    <div className='home-right'>
                        <div className='skill'>
                            <div className='diamond-2'><img className='icon' src={python}/></div>
                            <p className='icon-desc'>Python with Flask</p>
                        </div>
                        <div className='skill'>
                            <div className='diamond-2'><img className='icon' src={java}/></div>
                            <p className='icon-desc'>Java with <br></br>SpringToolSuite4 <br></br>and Flask</p>
                        </div>
                        <div className='skill'>
                            <div className='diamond-2'><img className='icon' src={react}/></div>
                            <p className='icon-desc'>MERN <br></br>(Mongo, Express, React, Node.js)</p>
                        </div>
                        <div className='skill'>
                            <div className='diamond-2'><img className='icon' src={bootstrap}/></div>
                            <p className='icon-desc'>MySQL, VS Code, Bootstrap, Amazon Web Services, GitBash</p>
                        </div>
                    </div>
            </div>
            <h1>Everything about me</h1>
            <div className='body-container about-container'>
                <div className='about-left'>
                    <h2>Work History</h2>
                    <div className='list-container'>
                        <ul>
                            <li>Stone Brewing</li>
                        </ul>
                    </div>
                </div>
                <div className='about-right'>
                    <h2>My Path</h2>
                    <p>Since graduating college with a science degree I have been promoted through several technical positions as a brewer during which I discovered a side passion for a software engineering. I committed to making a career transition and have just completed a Coding Dojo program in full-stack software engineering and web development.</p>
                    <p>This passion for software engineering came mainly through working directly with engineers at Stone to redesign and test new brewhouse software.  Through this 2+ year project I was able to learn and troubleshoot alongside contracted engineers and Stone's own engineers in order to implement this new program.</p>
                </div>
            </div>
            <div className='body-container portfolio-container'>

            </div>
        </div>
    )
}

export default Second