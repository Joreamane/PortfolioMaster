import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
    const [message, setMessage] = useState('...Loading')
    useEffect(() => {
        axios.get("https://localhost:8000/")
            .then(res=>setMessage(res.data.message))
            .catch(err=>console.log(err))
    }, []); //empty brackets mean that it will only run once instead of every time the prop changes

    return (
        <div style={{backgroundImage: "url(/images/mtrainier.jpg)"}}>

        </div>
    )
}
export default Main;