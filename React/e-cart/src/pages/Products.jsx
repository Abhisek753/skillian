import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Products = () => {
const [products,setProducts]=useState([])

const fetchProducts=async()=>{
  try{
   const res=await axios.get("http://localhost:3001/products");
    console.log(res.data,"data is present");
    setProducts(res.data)

  }catch(err){
    console.log(err)
    
  }

}
const groupProducts=products.reduce((acc,product)=>{
  if(!acc[product.category]) acc[product.category]=[];
  acc[product.category].push(product);

  return acc
},{})
console.log(groupProducts)

useEffect(()=>{
  fetchProducts()
},[])
 const addToCart= async(product)=>{
  try{
    await axios.post("http://localhost:3001/cart",product);
    alert("Added product to cart")

  }catch(err){
    console.log("Failed to add item in cart",err)
  }
   console.log(product,"for cart item")
 }

 const addToFavourite= async(product)=>{
  try{
    await axios.post("http://localhost:3001/favorites",product);
    alert("Added product to favorite")

  }catch(err){
    console.log("Failed to add item in favorite",err)
  }
  
 }

  return (
    <div className='p-4 space-y-8 mt-8'>
      {
     Object.keys(groupProducts).map((category)=>(
      <div key={category} className='bg-white p-6 rounded-lg shadow-md border-2'>
        <h2 className='text-2xl text-left font-bold mb-4 text-blue-700'>{category}</h2>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {groupProducts[category].map((product)=>(
              <div key={product.id} className='border p-4 rounded-lg shadow' >
               <Link to={`/product/${product.id}`}>
               <img src={product.image} className='w-full h-40 object-cover rounded'/>
               </Link>
                <h3 className='text-lg font-semibold mt-2'>{product.name}</h3>
                <p className='text-blue-600 font-bold'>${product.price}</p>
                <div className='mt-4 flex items-center justify-between'>
                  <button className='px-4 py-2' 
                  onClick={()=>addToCart(product)}
                  >🛒</button>
                  <button 
                   onClick={()=>addToFavourite(product)}
                  >❤️</button>
                </div>
              </div>
            ))}
         </div>
      </div>
     ))
      }
      
    </div>
  )
}

export default Products