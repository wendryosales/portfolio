import React from 'react';
import Typing from 'react-typing-animation';
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
            <Typing.Delay ms={1000} />
            <Typing.Reset />
          </Typing>
        </div>
        <div className={style.image}>
          <img src={picture} alt="Rapaz com camisa da Trybe" />
        </div>
      </div>
    </main>
  );
}

export default Home;
