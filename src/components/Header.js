import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header () {

  const [ menuMobile, setMenuMobile ] = useState(false);

  const toggleMenu = () => setMenuMobile(!menuMobile);

  return (
    <header  className={style.container}>
      <a 
        href='https://www.linkedin.com/in/wendryosales/'
        className={style.logo}
      > 
      WS
      </a>
      <nav
        className={menuMobile ?  `${style.nav} ${style.active}` : style.nav}
      >
        <button 
          className={style.mobile_toggle} 
          onClick={toggleMenu}
        >
          menu
          <span className={style.hamburguer} />
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

export default Header;
