import React from "react";
import Child from "./Child";

const ParentComponent = ({age}) => {
//   console.log(age,"age in parent component")
//   var Value={firstname:"abhisek",lastname:"Kumar"}
  const user={
    name:"Vivek",
    age:56,
    img:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
    address:"Banglore hsr layout near stya sai temple"
  }

  return (
    <div style={{backgroundColor:"gray"}}>
      <div>
        <h2>Parent</h2>
        {/* <span>{Value.firstname} {" "}{Value.lastname}</span> */}
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        {/* child component */}
        <Child user={user} childAge={age}  /> 
      </div>
    </div>
  );
};

export default ParentComponent;
