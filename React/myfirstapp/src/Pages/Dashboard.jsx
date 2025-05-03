import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <div className='bg-red-400'>
        <Link to="profile">Profile</Link>
        </div>
        <div></div>
        <div className='bg-blue-400'>
        <Link to="settings">Settings</Link>

        </div>
        <Outlet/>

    </div>
  )
}

export default Dashboard