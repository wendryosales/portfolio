import React from 'react';
import Tilt from 'react-tilt';
import style from './About.module.css';
import Header from '../components/Header';
import illustration from '../assets/illustration3d.png';
import icons from '../icons';

function About() {
  return (
    <main className={style.container}>
      <Header />
      <div className={style.wrapper}>

        <div className={style.image}>
          <Tilt className={style.tilt} options={{ max: 25, scale: 1.1 }}>
            <img src={illustration} alt="Ilustração 3d" />
          </Tilt>
        </div>

        <section className={style.about}>
          <h1>Sobre mim</h1>
          <p>
            Olá, me chamo Wendryo, tenho 22 anos e moro em Vila Velha - ES.
            Sou apaixonado por tecnologia e estou sempre procurando aprender
            coisas novas. Sou desenvolvedor Full Stack em uma empresa voltada
            para o ramo de cybersecurity chamada Morphus e estudo na @trybe.
            Embora tenha preferência por desenvolvimento em nodeJS e React, trabalho
            com Django Rest Framework e React. Me adapto facilmente a novas tecnologias
            devido a aptidão de aprender rápido e a facilidade de entender conceitos.
          </p>
          <section className={style.skills}>
            <h2> Hard Skills</h2>
            <div className={style.icons}>
              {
                icons.map(({ title, src }) => (
                  <abbr key={title} title={title}>
                    <img src={src} alt={`${title} icon`} />
                  </abbr>
                ))
              }
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default About;
