import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='home-page'>
        <h1>Movie</h1>
        <ul className='home-page-nav'>
             <Link to="/"> <li>Home</li></Link>
             <Link to="/signup"> <li>Signup</li></Link>
             <Link to="/login"> <li>Login</li></Link>
        </ul>
    </div>
  )
}

export default HomePage