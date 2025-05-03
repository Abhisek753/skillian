import React, { useEffect, useState } from 'react'
import axios from "axios"
const Products = () => {
const [products,setProducts]=useState([])

const fetchProducts=async()=>{
  try{
    const res=await axios.get("http://localhost:3001/products");
    console.log(res,"data is present");
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


  return (
    <div className='p-4 space-y-8 mt-8'>
      {
     Object.keys(groupProducts).map((category)=>(
      <div>{category}
      
      </div>
     ))
      }
      
    </div>
  )
}

export default Products