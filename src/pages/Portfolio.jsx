import React, { useState } from 'react';
import { RiGitRepositoryLine, RiLinksLine } from 'react-icons/ri';
import { Carousel } from 'react-bootstrap';
import Header from '../components/Header';
import style from './Portfolio.module.css';
import projects from '../projects';

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <section className={style.title}>
          <h1> Projetos </h1>
        </section>
        <Carousel className="p-3" tabIndex={index} activeIndex={index} onSelect={handleSelect}>
          {
            projects.map(({
              title, deploy, repository, image, description, alt,
            }) => (
              <Carousel.Item>
                <div
                  key={title}
                  className={style.card}
                >
                  <img src={image} alt={alt} />
                  <h1>
                    { title }
                  </h1>
                  <div className={style.links}>
                    <p>
                      {description}
                    </p>
                    <div className={style.icons}>
                      <abbr title="Visualizar">
                        <a
                          href={deploy}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiLinksLine />
                        </a>
                      </abbr>
                      <abbr title="Repositório GitHub">
                        <a
                          href={repository}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiGitRepositoryLine />
                        </a>
                      </abbr>
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
