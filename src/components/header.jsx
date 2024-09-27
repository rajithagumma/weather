import React from 'react'
import Logo_image from '../Assets/logo.png'
import './header.css'
import Hourly from './hourly'
const Login = () => {
  return (
    <div className="header">
      <div class="logoimg">
        <img src={Logo_image}alt="" className='logo'></img>
        </div>
        <div className='hourly'>
          <a href={Hourly}><h3>Hourly</h3></a>
        </div>
        <div className='weekly'>
        <a href="#weekly"><h3>weekly</h3></a>
        </div>
        <div className='Login'>
          <a href="#login"><h3>Login</h3></a>
        </div>
    </div>
  )
}

export default Login