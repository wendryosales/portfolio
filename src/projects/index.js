import trybeTunes from '../assets/projects/trybe-tunes.png';
import whatToCook from '../assets/projects/what-to-cook.png';
import solarSystem from '../assets/projects/solar-system.png';
import loginInstagram from '../assets/projects/instagram-login.png';

const projects = [
  {
    title: 'TrybeTunes',
    image: trybeTunes,
    deploy: 'https://trybetune.netlify.app/',
    repository: 'https://github.com/wendryosales/trybeTunes',
    description: 'Aplicação para busca de albums e músicas utilizando a API do iTunes',
    alt: 'First slide',
  },
  {
    title: 'What to Cook',
    image: whatToCook,
    deploy: 'https://what-to-cook.netlify.app/',
    repository: 'https://github.com/wendryosales/what-to-cook',
    description: 'Projeto bônus realizado em grupo, aplicativo que te ajuda escolher uma receita',
    alt: 'Second slide',
  },
  {
    title: 'Solar System',
    image: solarSystem,
    deploy: 'https://solar-sytem.netlify.app/',
    repository: 'https://github.com/wendryosales/Solar-system',
    description: 'Projeto sobre planetas do sistema solar que contem cards com as missões espaciais',
    alt: 'Third slide',
  },
  {
    title: 'Login Instagram',
    image: loginInstagram,
    deploy: 'https://github.com/wendryosales/instagram-login',
    repository: 'https://github.com/wendryosales/instagram-login',
    description: 'Clone da página de login do instagram responsivo',
    alt: 'Fourth slide',
  },
];

export default projects;
