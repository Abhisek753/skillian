// import React from 'react'

// const Dummy = ({discription}) => {
//   return (
//     <div>{discription}</div>
//   )
// }

// export default Dummy
import React from 'react'
import Child from './components/Props/Child'

const Dummy = (props) => {
    let data={name:"Ravi",color:"blue"}
    
  return (
   <>
    <div>{props.discription}</div>
    <Child user={data} color="red" />
   </>
  )
}

export default Dummy