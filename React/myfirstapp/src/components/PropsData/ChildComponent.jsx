import React from 'react'
import GrandChild from './GrandChild';

const ChildComponent = ({name2,data,sendFun}) => {

    console.log(data);
    let arr=[1,2,3,4,5,6]
    let obj={
        name:"Abhisek",
        age:"45",
        phone:"8989898989"
    }

    const SendData=()=>{
        // console.log("Heelo child")
        // sendFun("Hello Gargiy")
        sendFun(obj)
    }


  return (
    <div>
        {/* ChildComponent */}
        <div>
            {/* <span>{name2}</span> */}
            {/* <GrandChild dataforgrandchild={data}/> */}
            <button onClick={SendData}>Child btn</button>
        </div>
    </div>
  )
}

export default ChildComponent