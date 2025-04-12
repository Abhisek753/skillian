import React from 'react'

const Child = ({name,childAge,user,color}) => {
    console.log(name)
  return (
    <div style={{backgroundColor:"teal"}}>
        {/* <div>Child Component</div>

        <span>{name}-----{childAge}</span> */}
        <div className='card' style={{height:"200px",width:"200px",backgroundColor:color,color:"black",margin:"20px"}}>
          <div style={{display:"flex"}}>
            <div>
                <img style={{width:"50px"}} src={user?.img}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <span>Name: {user?.name}</span>
                <span>Age: {user?.age}</span>
            </div>
          </div>
          <div>
            {user?.address}
          </div>
        </div>
    </div>
  )
}

export default Child