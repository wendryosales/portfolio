import trybeTunes from '../assets/projects/trybe-tunes.png';
import whatToCook from '../assets/projects/what-to-cook.png';
import solarSystem from '../assets/projects/solar-system.png';
import loginInstagram from '../assets/projects/instagram-login.png';
import shoppingCart from '../assets/projects/shopping-cart.png';
import pixelsArt from '../assets/projects/pixels-art.png';
import toDoList from '../assets/projects/todo-list.png';

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
  {
    title: 'Shopping Cart',
    image: shoppingCart,
    deploy: 'https://shopping-cartw.netlify.app',
    repository: 'https://github.com/wendryosales/shopping-cart',
    description: 'Carrinho de compras com manipulação do DOM em JavaScript Vanilla',
    alt: 'Fifth slide',
  },
  {
    title: 'Pixels Art',
    image: pixelsArt,
    deploy: 'https://pixels-artt.netlify.app',
    repository: 'https://github.com/wendryosales/pixels-art',
    description: 'Quadro de pinturas pixeladas, onde é possível escolher a cor com base em uma paleta randomizada e outra fixa.',
    alt: 'Sixth slide',
  },
  {
    title: 'To do List',
    image: toDoList,
    deploy: 'https://github.com/wendryosales/todo-list',
    repository: 'https://github.com/wendryosales/todo-list',
    description: 'Lista de tarefas a fazer com opção de marcar as prontas e salvar o progresso no LocalStorage',
    alt: 'Seventh slide',
  },
];

export default projects;
