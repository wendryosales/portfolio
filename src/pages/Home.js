import React, { Component } from 'react';
import style from './Home.module.css';
import picture from '../assets/picture.png'


class Home extends Component {
  render(){
    return (
      <main  className={style.home}>
        <h1 className={style.title}>
          Desenvolvedor Web Full Stack
        </h1>
        <img src={picture} alt='Rapaz com camisa da Trybe' />
      </main>
    )
  }
}

export default Home;