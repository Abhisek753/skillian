import React, { useRef } from 'react'

const Contact = () => {
    const inputRef=useRef()

    const handleChange=()=>{
        console.log("Function is called in contact page");
        console.log(inputRef.current);
        inputRef.current.style.backgroundColor="red"
    }



  return (

    <div>
        <h2>
        Contact
        </h2>
        {/* <button  ref={inputRef}></button> */}
        <input className='' placeholder='Please fill text' type='text' ref={inputRef} />
        <button onClick={handleChange}>Click</button>
    </div>
  )
}

export default Contact