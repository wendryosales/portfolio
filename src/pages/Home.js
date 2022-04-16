import React from 'react';
import style from './Home.module.css';
import picture from '../assets/picture.png'
import Header from '../components/Header'
import Typing from 'react-typing-animation';

function Home () {
  return (
    <main  className={style.container}>
      <Header />
      <div className={style.home}>
        <div className={style.typing}>
          <Typing 
          loop={true}
          speed={300}
          className={style.title}
          >
            <span>{'<h1>'}</span>
            <Typing.Backspace count={4} delay={40} />
            <Typing.Speed ms={150} />
            <span>Desenvolvedor Web Full Stack</span>
            {/* <Typing.Backspace count={22} delay={20} /> */}
            {/* <span > </span> */}
            <Typing.Speed ms={50} />
            <Typing.Backspace count={28} delay={20} />
            <Typing.Speed ms={300} />
            <span>{'</h1>'}</span>
            <Typing.Delay ms={1000} />
            <Typing.Reset />
          </Typing>
        </div>
        <div className={style.image}>
          <img src={picture} alt='Rapaz com camisa da Trybe' />
        </div>
      </div>
    </main>
  )
}

export default Home;