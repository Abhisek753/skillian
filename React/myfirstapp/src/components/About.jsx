import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {
    const Navigate=useNavigate()

    const handleFetch=()=>{
        console.log("function is called in about page")
        ///form submit
        Navigate("/home")
    }
  return (
    <div>
        <div>
            <h2 className='text-red-400'>About</h2>
        </div>
   <button className='bg-blue-400 text-white' onClick={handleFetch}>Page change</button>
    </div>
  )
}

export default About