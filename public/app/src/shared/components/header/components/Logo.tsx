
import React from 'react'
import "../styles/Logo.sass"
import logo from "../../../../assets/img/logo/brick.png"

const Logo = () => (
  <div className="logo-container">
    <img src={logo} alt='logo'/>
  </div>
)

export default Logo;