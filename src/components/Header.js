import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

class Header extends Component {
  render(){
    return (
      <header  className={style.container}>
        <a 
          href='https://www.linkedin.com/in/wendryosales/'
          className={style.logo}
        > 
        WS
        </a>
        <nav className={style.nav}>
          <button className={style.mobile_toggle}>
            menu
          </button>
          <ul className={style.menu}>
            <li> <Link href='/' >Home</Link> </li>
            <li> <Link href='/about' >Sobre</Link> </li>
            <li> <Link href='/portfolio' >Portfólio</Link> </li>
            <li> <Link href='/contact' >Contato</Link> </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
