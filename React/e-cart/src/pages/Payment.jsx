import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Payment = () => {
  const [formData,setFormData]=useState({
    name:"",
    cardNumber:"",
    expiry:"",
    cvv:""
  })
 const location=useLocation()
  const totalPrice=location.state?.totalPrice||0


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((pre)=>({
      ...pre,
      [name]:value
    }))
  }
  const handleSubmit=(e)=>{
    
    e.preventDefault();
    console.log("99999999999999999999")
    if(
      formData.name && formData.cardNumber&& formData.expiry && formData.cvv 
    ){
      alert("✅ Payment Successful")
    }else{
      alert("❌ Please fill all the fields")
    }

  }
  
  return (
    <div className='min-h-[80vh] flex items-center justify-center p-6'>
      <form onSubmit={handleSubmit}  className='w-full max-w-md bg-white shadow-lg p-6 border  space-y-3' >
        <h2 className='text-xl font-semibold text-left text-red-500'>Payable Amount:- {totalPrice}</h2>
        <h2 className='text-xl font-semibold  mb-4 text-left'>Payment Details</h2>
        <div>
          <label className='block font-semibold mb-1'>Cardholder Name</label>
          <input
          type='text'
          name="name"
          value={formData.name}
          placeholder='Full Name'
          onChange={handleChange}
          className='w-full px-3 border py-2 rounded'
          />
        </div>
         <div>
          <label className='block font-semibold mb-1'>Card Number</label>
          <input
          type='text'
          name="cardNumber"
          placeholder='1234 5678 9012 4567'
          value={formData.cardNumber}
          onChange={handleChange}
          className='w-full px-3 border py-2 rounded'
          />
        </div>
         <div>
          <label className='block font-semibold mb-1'>Expiry</label>
          <input
          type='text'
          name="expiry"
          value={formData.expiry}
          placeholder='Expiry'
          onChange={handleChange}
          className='w-full px-3 border py-2 rounded'
          />
        </div>
        <div>
          <label className='block font-semibold mb-1'>CVV</label>
          <input
          type='password'
          name="cvv"
          value={formData.cvv}
          placeholder='MM/YY'
          onChange={handleChange}
          className='w-full px-3 border py-2 rounded'
          />
        </div>
        <button className='w-full bg-green-600 text-white font-semibold py-2 rounded' type='submit'>Pay Now</button>
      </form>
    </div>
  )
}

export default Payment