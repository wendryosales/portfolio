import React, { Component } from 'react';
import style from './Home.module.css';
import picture from '../assets/picture.png'
import Header from '../components/Header';


class Home extends Component {
  render(){
    return (
      <main  className={style.home_container}>
        <Header />
        <h1 className={style.title}>
          Desenvolvedor Web Full Stack
        </h1>
        <div className={style.image}>
          <img src={picture} alt='Rapaz com camisa da Trybe' />
        </div>
      </main>
    )
  }
}

export default Home;