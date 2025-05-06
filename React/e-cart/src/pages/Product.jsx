import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
const {id} =useParams();
const [product,setProduct]=useState(null)

const fetchProductDetails=async()=>{
  try{
    const res=await axios.get(`http://localhost:3001/products/?id=${id}`);
    console.log(res,"response in single product page");
    setProduct(res.data[0])
  }catch(error){
    console.log(error)
  }
}
const addToCart= async(product)=>{
  try{
    await axios.post("http://localhost:3001/cart",product);
    alert("Added product to cart")

  }catch(err){
    console.log("Failed to add item in cart",err)
  }
   console.log(product,"for cart item")
 }
useEffect(()=>{
  fetchProductDetails()
},[])
  return (
    <div className='min-h-screen p-6 flex'>
      <div className='w-1/2 pr-6'>
        <img src={product?.image}/>
        </div> 
        <div className='w-1/2  flex flex-col justify-start items-start'>
          <h2 className='text-3xl font-bold mb-4'>{product?.name}</h2>
          <p className='text-lg mb-4 items-start text-left'>{product?.description}</p>
          <p className='text-2xl font-semibold text-blue-700'>${product?.price}</p>
           <div className='flex gap-8 mt-16 '>
            <button className='bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-700'
               onClick={()=>addToCart(product)}
            >
             Add to cart 🛒
            </button>
            <button className='bg-red-600 px-6 py-2 text-white rounded hover:bg-red-700'>
              Add to favourite ❤️
            </button>
           </div>
        </div>
    
    </div>
  )
}

export default Product