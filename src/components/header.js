import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Free Simple Apps</h1>
    <p>We develop mobile apps that delight your users and grow your business.</p>
  </header>
)

export default Header
