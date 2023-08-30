import React, { useEffect, useState, Component } from 'react'
import axios from 'axios'
import routeTrackerImg1 from '../images/RouteTracker1.JPG'
import hotTopicImg1 from '../images/HotTopics.JPG'
import '../index.css'

const Main = () => {
    const [message, setMessage] = useState('...Loading')
    useEffect(() => {
        axios.get("https://localhost:8000/")
            .then(res=>setMessage(res.data.message))
            .catch(err=>console.log(err))
    }, []); //empty brackets mean that it will only run once instead of every time the prop changes

    return (
        <div>
            <div className='header'>
                <h1>Eric Fallon</h1>
                <h4>Web Developer blending a focused web development education with an ecclectic background.</h4>
            </div>
            <div className='gallery'>
                <div className='gallery-item'>
                    <img src={routeTrackerImg1}/>
                </div>
                <div className='gallery-item'>
                    <img src={hotTopicImg1}/>
                </div>
                <div className='gallery-item'>
                    
                </div>
                <br/>
                <div className='gallery-item'>
                    
                </div>
                <div className='gallery-item'>
                    
                </div>
                <div className='gallery-item'>
                    
                </div>
            </div>
        </div>
    )
}
export default Main;