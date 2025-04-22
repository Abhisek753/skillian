import React, { useEffect, useState } from 'react'

const Mycomponent = () => {
    // const [state,setState]=useState("my name is kunal");
    // const [name,setName]=useState("Shyam");
    // const [data,setData]=useState([1,2,3,4,5])
    // const [value,setValue]=useState(45)
    const [count,setCount]=useState(0)
    const [disable,setDisable]=useState(false)
    const [disablevalue,setDisableValue]=useState(false)



    // const handleClick=()=>{
    // //    console.log(data);
    // //    setData([4,6])
    

    // }
const Increment=()=>{
    if(count>=15){
        setDisable(true)
    }else{
    setCount(count+1)
        
    }
 console.log("increase")
}
const Decrement=()=>{
    console.log("decrease")
    setCount(count-1)

}
const fetchData=()=>{
    console.log("data got")
}
const Reset=()=>{

    setCount(0)
}


// useEffect(()=>{
//     fetchData()
//     console.log("effect is called");
// },[count])

//post
const postData=()=>{
    //api call
    //.then(
    // getdata()
    // 
    // 
    // 
    // ).catch



    //
}

const getdata=()=>{
    // api call for get data
    //sststate()
}
//get






let name="abhisek9"
  return (
    <div>
        {/* <span>{name}</span> */}
       <button onClick={Decrement} style={{backgroundColor:"#8c8fd8",padding:"4px",margin:"10px"}}>Decrease -</button>
      { <span style={{color:"red",padding:"4px",margin:"10px"}}>{count}</span>}
       <button onClick={Increment} style={{backgroundColor:"#8c8fd8",padding:"4px",margin:"10px"}} disabled={disable}>Increase +</button>
       <button  onClick={Reset} style={{backgroundColor:"red",padding:"4px",margin:"10px"}}>Reset</button>
       {name=="abhisek"?<p>hi abhisek</p>:<p>Hi no abhisek</p>}
  


    </div>
  )
}

export default Mycomponent