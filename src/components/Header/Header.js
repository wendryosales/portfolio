import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return (
      <header  className='header'>
        <span className='logo'>WS</span>
        <div className='navbar'>
          <button>home</button>
          <button>sobre</button>
          <button>portifólio</button>
          <button>contato</button>
        </div>
      </header>
    )
  }
}

export default Header;
