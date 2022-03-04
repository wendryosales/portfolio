import React, { Component } from 'react';
import Button from './Button';
import './Header.css';
import Logo from './Logo'

class Header extends Component {
  render(){
    return (
      <header  className='header'>
        <Logo className='logo'/>
        <div className='navbar'>
          <Button className='button' text="home" />
          <Button className='button' text="sobre" />
          <Button className='button' text="portifólio" />
          <Button className='button' text="contato" />
        </div>
      </header>
    )
  }
}

export default Header;
