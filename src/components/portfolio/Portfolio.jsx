import React from 'react';
import IMG1 from '../../assets/movie.jpeg';
import IMG2 from '../../assets/todo.jpeg';
import IMG3 from '../../assets/fox.jpeg';
import IMG4 from '../../assets/weather.jpeg';
import IMG5 from '../../assets/emojis.jpeg';
import IMG6 from '../../assets/rick.jpeg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Movie App',
      img: IMG1,
      description:
        'a movie application made with react that consumes an external api and with an infinite scroll',
      technologies: 'React | JavaScript ',
      link: 'https://62f21f1cea18ae0cc6082bd9--merry-macaron-eb582f.netlify.app/',
      github: 'https://github.com/alearigth/movies-app',
    },
    {
      id: 2,
      title: 'App Time',
      img: IMG4,
      description:
        'App Time using react and weather api rest',
      technologies: 'React | JavaScript',
      link: 'https://visionary-frangollo-8d6888.netlify.app',
      github: 'https://github.com/alearigth/appTime',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | react | Webpack',
      link: 'https://62f21f59c4b8940d455353cd--spectacular-twilight-e604eb.netlify.app/',
      github: 'https://github.com/alearigth/todoReact',
    },
    {
      id: 4,
      title: 'Foxbel-Music',
      img: IMG3,
      description:
        'This is a music app called foxbel - music, implemented in vite using the react library',
      technologies: 'react | styled Components',
      link: 'https://alearigth.github.io/music-foxbel/',
      github: 'https://github.com/alearigth/music-foxbel',
    },
    {
      id: 5,
      title: 'Emoinfo',
      img: IMG5,
      description:
        'Fully responsive interactive website emoji',
      technologies: 'TypeScript | Tailwind | Nextjs ',
      link: 'https://62f21ee7c4b8940de053522a--illustrious-kringle-c7f2d4.netlify.app/',
      github: 'https://github.com/alearigth/emojis-app',
    },
    {
      id: 6,
      title: 'Rick and Morty',
      img: IMG6,
      description:
        'consuming the rick and morty api in react',
      technologies: 'JavaScript | Bootstrap | React',
      link: 'https://beautiful-bavarois-6ba24d.netlify.app',
      github: 'https://github.com/alearigth/rick-morty',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
