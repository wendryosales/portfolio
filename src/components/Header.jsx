import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  const [menuMobile, setMenuMobile] = useState(false);

  const toggleMenu = () => setMenuMobile(!menuMobile);

  return (
    <header className={style.container}>
      <p
        className={style.logo}
      >
        WS
      </p>
      <nav
        className={menuMobile ? `${style.nav} ${style.active}` : style.nav}
      >
        <button
          type="button"
          className={style.mobile_toggle}
          onClick={toggleMenu}
        >
          <span className={style.hamburguer} />
        </button>
        <ul className={style.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfólio</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
