import React from 'react';
import '../secondary.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import portrait from '../images/portrait.jpg'

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
            <div className='body-container home-container'>
                    <div className='home-left'>
                        <div className='diamond'><img src={portrait}/></div>
                        <p className='portrait-desc'>I am a web developer from San Diego, Ca.  I am passionate about and eager to learn all things coding, and enjoy finding creative solutions to real world problems.</p>
                    </div>
                    <div className='home-right'>
                        <div className='skill'>
                            <div className='diamond-2'></div>
                        </div>
                        <div className='skill'>
                            <div className='diamond-2'></div>
                        </div>
                        <div className='skill'>
                            <div className='diamond-2'></div>
                        </div>
                        <div className='skill'>
                            <div className='diamond-2'></div>
                        </div>
                    </div>
            </div>
            <div className='body-container about-container'>

            </div>
            <div className='body-container portfolio-container'>

            </div>
        </div>
    )
}

export default Second