import React, { useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Contact = () => {
  const [searchParam]=useSearchParams()
  const location=useLocation()
  console.log(location,"location in contact page")
    // const inputRef=useRef()

    // const handleChange=()=>{
    //     console.log("Function is called in contact page");
    //     console.log(inputRef.current);
    //     inputRef.current.style.backgroundColor="red"
    // }
 const category=searchParam.get("category");
 const page=searchParam.get("page");
 console.log(category);


  return (

    <div>
      <h1>{category}--{page}</h1>
        <h2>
        Contact
        </h2>
        {/* <button  ref={inputRef}></button>
        <input className='' placeholder='Please fill text' type='text' ref={inputRef} />
        <button onClick={handleChange}>Click</button> */}
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
    </div>
  )
}

export default Contact