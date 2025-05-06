import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
const [cartItems,setCartItems]=useState([])

const fetchCartItems= async()=>{
  try{
    const res=await axios.get("http://localhost:3001/cart");
    setCartItems(res?.data)
  }catch(err){
    console.log(err)
  }
}

const removeFromCart=async(id)=>{
 try{
   await axios.delete(`http://localhost:3001/cart/${id}`);
   fetchCartItems()
 }catch(error){
  console.log("Faild to delete cart item",error)
 }
}

useEffect(()=>{
  fetchCartItems()
},[])

  return (
    <div className='p-6 min-h-[80vh]'>
      <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {cartItems.length>0 ?(
            cartItems.map((item)=>(
              <div key={item.id} className='border p-4 rounded-lg shadow' >
               <Link to={`/product/${item.id}`}>
               <img src={item.image} className='w-full h-40 object-cover rounded'/>
               </Link>
                <h3 className='text-lg font-semibold mt-2'>{item.name}</h3>
                <p className='text-blue-600 font-bold'>${item.price}</p>
                <button
                onClick={()=>removeFromCart(item.id)}
                className='mt-4 bg-red-500 text-white font-semibold px-4 py-2'>Remove form cart 🗑️</button>
              </div>
            ))
          ):"Your Cart is empty" }
       </div>
    </div>
  )
}

export default Cart