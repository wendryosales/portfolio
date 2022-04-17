import React from 'react';
import { RiGitRepositoryLine, RiLinksLine } from 'react-icons/ri';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
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
        <section
          className={style.projects}
        >
          <BsFillArrowLeftCircleFill />
          {
            projects.map(({
              title, image, deploy, repository,
            }) => (
              <div key={title} className={style.card}>
                <img src={image} alt={title} />
                <h1>
                  { title }
                </h1>
                <div className={style.links}>
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
                {/* <FcBrokenLink />
                <RiGitRepositoryCommitsLine /> */}
              </div>
            ))
          }
          <BsFillArrowRightCircleFill
            className={style.arrowRight}
          />
        </section>
      </div>
    </main>
  );
}

export default Portfolio;
