import React, { Component } from 'react';
import './Home.css';
import picture from '/home/wendryo/portfolio/src/Image/picture.png'


class Home extends Component {
  render(){
    return (
      <main  className='home'>
        <h1 className='title'>
          Desenvolvedor Web Full Stack
        </h1>
        <img src={picture} alt='Wendryo com camisa da Trybe' />
      </main>
    )
  }
}

export default Home;