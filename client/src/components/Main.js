import React, { useEffect, useState, Component } from 'react'
import axios from 'axios'
import background from '../images/mtrainier.jpg'
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
            
        </div>
    )
}
export default Main;