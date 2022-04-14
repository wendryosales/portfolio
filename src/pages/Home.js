import React, { Component } from 'react';
import './Home.css';
import picture from '../assets/picture.png'


class Home extends Component {
  render(){
    return (
      <main  className='home'>
        <h1 className='title'>
          Desenvolvedor Web Full Stack
        </h1>
        <img src={picture} alt='Rapaz com camisa da Trybe' />
      </main>
    )
  }
}

export default Home;