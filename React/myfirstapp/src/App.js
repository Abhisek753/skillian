import React, { useCallback, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from "./components/About"
import SinglePage from './components/SinglePage'

const App = () => {

  return (
    <BrowserRouter>
    <div>
    <div style={{border:"2px solid black"}}>
    <ol>
        <li>
          <a to="/home">Home</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ol>
    </div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:id' element={<SinglePage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App