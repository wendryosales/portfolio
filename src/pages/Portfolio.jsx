import React from 'react';
import { RiGitRepositoryLine, RiLinksLine } from 'react-icons/ri';
import { Carousel } from 'react-bootstrap';
import Header from '../components/Header';
import style from './Portfolio.module.css';
import projects from '../projects';

function Portfolio() {
  return (
    <main className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <section className={style.title}>
          <h1> Projetos </h1>
        </section>
        <Carousel className="p-3">
          {
            projects.map(({
              title, deploy, repository, image, description,
            }) => (
              <Carousel.Item className="d-flex justify-content-center">
                <div key={title} className={style.card}>
                  <img src={image} alt={title} />
                  <h1>
                    { title }
                  </h1>
                  <div className={style.links}>
                    <p>
                      {description}
                    </p>
                    <div className={style.icons}>
                      <a
                        href={deploy}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiLinksLine />
                      </a>
                      <a
                        href={repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiGitRepositoryLine />
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    </main>
  );
}

export default Portfolio;
