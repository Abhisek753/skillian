import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
    const location=useLocation()
    console.log(location,"location in login page");
  return (
    <div>Login</div>
  )
}

export default Login