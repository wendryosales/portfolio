import React from 'react';
import Typing from 'react-typing-animation';
import Tilt from 'react-tilt';
import style from './Home.module.css';
import picture from '../assets/picture.png';
import Header from '../components/Header';

function Home() {
  return (
    <main className={style.container}>
      <Header />
      <div className={style.home}>
        <div className={style.typing}>
          <Typing
            loop
            speed={150}
            className={style.title}
          >
            <span>Desenvolvedor Web Full Stack</span>
            <Typing.Speed ms={50} />
            <Typing.Backspace count={28} delay={20} />
          </Typing>
        </div>
        <div className={style.titleMobile}>
          <span>Desenvolvedor Web Full Stack</span>
        </div>
        <div className={style.image}>
          <Tilt className={style.tilt} options={{ max: 25 }}>
            <img src={picture} alt="Rapaz com camisa da Trybe" />
          </Tilt>
        </div>
      </div>
      <div className={style.bg} />
    </main>
  );
}

export default Home;
