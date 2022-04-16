import React from 'react';
import style from './Home.module.css';
import picture from '../assets/picture.png'
import Header from '../components/Header'

function Home () {
  return (
    <main  className={style.container}>
      <Header />
      <div className={style.home}>
          <h1 className={style.title}>
            Desenvolvedor Web Full Stack
          </h1>
        <div className={style.image}>
          <img src={picture} alt='Rapaz com camisa da Trybe' />
        </div>
      </div>
    </main>
  )
}

export default Home;