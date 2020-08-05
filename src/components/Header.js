import React from 'react';

import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt='Kespry Company Logo' width='100px' height='45px'/>
    </header>
  )
}

export default Header;