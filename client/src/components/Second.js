import React from 'react';
import '../secondary.css'

const Second = () => {
    
    return (
        <div>
            <div className='landing-container'>
                <h1>Ahoy, I'm <strong>Eric Fallon</strong></h1>
                <h3>Web developer, brewer, climber, skier, <br></br>and resident insect/reptile expert</h3>
            </div>
            <div className='navbar navbar-dark navbar-expand-lg bg-primary'>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse' id='navbarColor01'>
                        <li className='nav-item'>
                            <a href='#' className='nav-link'>Home</a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second