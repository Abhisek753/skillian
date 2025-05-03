import React from 'react'
import Layout from '../pages/Layout'
import Home from "../pages/Home"
import {Routes,Route} from "react-router-dom"
import Product from "../pages/Product"
import Payment from "../pages/Payment"
import Cart from "../pages/Cart"
import Favourite from "../pages/Favourite"


const GlobalRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/favourite" element={<Favourite/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </Layout>
    </div>
  )
}

export default GlobalRoute