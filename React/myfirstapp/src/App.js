import React, { useCallback, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from "./components/About"
import SinglePage from './components/SinglePage'
import ProtectedRouteAdmin from './Routes/ProtectedRouteAdmin'
import ProtectedRouteUser from './Routes/ProtectedRouteUser'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'

const App = () => {
  
  // localStorage.setItem("isAuthenticated",true)
  // localStorage.setItem("role","user")

  return (
    <BrowserRouter>
    <div>
    <div style={{border:"2px solid black"}}>
    <ol>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact/:id/products?category=shoes&page=2">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/contact/:id/products' element={
          <ProtectedRouteUser>
          <Contact/>
          </ProtectedRouteUser>
          } />
        <Route path='/about' element={
          <ProtectedRouteAdmin  >
          <About/>
          </ProtectedRouteAdmin>
          } />
        <Route path='/about/:id' element={<SinglePage/>} />
        <Route path='/dashboard' element={<Dashboard/>} >
           <Route path='profile' element={<Profile/>} />
           <Route path='settings' element={<Settings/>} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App