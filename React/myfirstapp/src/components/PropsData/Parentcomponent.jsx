import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'

const Parentcomponent = () => {
    // const [obj,setObj]=useState({})
    const [value,setValue]=useState("Tina")
    const [value2,setValue2]=useState(["Gargai","Kusumlata,Fahim","Satyam"])
   const [count,setCount]=useState(0);


    // let name="Kusumlata"
    // let values=["Faizan","Shyam","Ram","Gita"];

    // const HandleChildData=(data)=>{
    // //  console.log("Click from child")
    //  console.log(data);
    //  setObj({...obj,data})
    // }
    

    //post
    useEffect(()=>{
      console.log("123345566777")

      //api
    },[value2]);

   

   const ChangeData=()=>{
    setValue("Lord Buddha")
    setValue2(["test1","rest2"])
   }
console.log("dummy log printed")







  return (
    <div>
        <div>
            {/* <span>Parentcomponent</span> */}
            {/* {obj.name}-{obj.email} */}
            {/* <span>{value[2]}</span> */}
        </div>
        <div>
            {/* <ChildComponent name2={name} data={values} sendFun={HandleChildData}/> */}
        </div>

        <div>
            <span>{value}</span>
            <div>{value2}</div>
            <button onClick={ChangeData}>Change Data</button>
        </div>
        <h1>Timer :{count}</h1>
        <button onClick={()=>{setCount((pre)=>pre+1)}}>Increase</button>
    </div>
  )
}

export default Parentcomponent