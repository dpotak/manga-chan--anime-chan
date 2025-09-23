import React from "react"; 
import "./styles/index_chan.css";
import "./styles/index_chan_2.css";
import "./styles/forms_website.css";
import "./styles/Scroll_ramka_anime.css"
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import ramka_anime_manga from './foto/ramka_anime_manga.jpg';
import Chanisaw from './ramka_anime_folder/Chanisaw.jpg';
import kusuriyanohi_2season from './ramka_anime_folder/kusuriyanohi_2season.jpg';
import inuyasha from './ramka_anime_folder/inuyasha.jpg';
import kusuriyanohitorigoto_1season from './ramka_anime_folder/kusuriyanohitorigoto_1season.jpg';
import { Button, Typography } from '@mui/material';
import { useHomePagesTransition } from "../hooks/HomePages_Transition";
import { Link } from "react-router-dom";

// массив всех рекомендаций
const animeImages = [
  { title: "Chanisaw", poster: Chanisaw },
  { title: "Kusuriyanohi 2", poster: kusuriyanohi_2season },
  { title: "Kusuriyanohitorigoto 1", poster: kusuriyanohitorigoto_1season },
  { title: "Inuyasha", poster: inuyasha },
  // { title: "Chanisaw", poster: Chanisaw },
  // { title: "Chanisaw", poster: Chanisaw },
  // { title: "Chanisaw", poster: Chanisaw }
];

// функция перемешивания массива
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const HomePage = () => {
  useHomePagesTransition();

  // перемешиваем картинки перед рендером
  const shuffledImages = shuffleArray(animeImages);

  return (     
    <div>
      <div className="header">
        <h1>Manga-chan--Anime-chan</h1>
        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn">Каталог</button>
            <div className="dropdown-content">
              <Link to="/Manga_chan">Манга</Link>
              <Link to="/Anime_chan">Аниме</Link>
            </div>
          </div>

          <Link to="/">Главная</Link>
          <Link to="/ForumPage">Обсуждение</Link>
          <Link to="/NewsPage">Новости</Link>
          <Link to="/QuestionsPage">Вопросы и ответы</Link>
          <Link to="/Contacts">Контакты</Link>
          <Link to="/RegisterPage">Регистрация/Войти</Link>

          <form id="searchForm">
            <input type="text" placeholder="Искать здесь..." />
            <button type="submit"></button>
          </form>

          <div className="language">
            <button>
              <img src={britainFlag} width="20" height="20" alt="EN" />
            </button>
            <button className="rus">
              <img src={russianFlag} width="20" height="20" alt="RU" />
            </button>
          </div>
        </nav>
      </div>

      <div className="Glav_stanica">
        <h1 className="h1_glavnaja">Смотри аниме и читай мангу!</h1>
        <div className="project-description">
          <p> 
            <strong>Manga-Anime-Chan</strong> - это проект в котором прекрасно сочетаются чтение манги и просмотр аниме. Он позволяет пользователям удобно просматривать контент, обсуждать любимые произведения и следить за новостями индустрии.
          </p>
        </div>

        <div className="Opisanie_1">
          <Typography variant="h5" color="initial" className="h2_op_1">О Аниме:</Typography>
          <p>Старые остаются , новинки приходят!</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
        <div className="Opisanie_2">
          <Typography variant="h5" color="initial" className="h2_op_2">О Мангах:</Typography>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="Rekomenduemoe">
        <div className="h1_glavnaja_rekomedancie">
          <Typography variant="h5" color="initial">Рекомендации по Аниме:</Typography>
        </div>

        <div className="cards-row">
          {shuffledImages.map((anime, index) => (
            <Button
              key={index}
              variant="text"
              color="default"
              className="btn_anime"
            >
              {/* рамка */}
              <img src={ramka_anime_manga} className="glav_anime_manga_1" alt="рамка"/>
              {/* плакат аниме */}
              <img src={anime.poster} className="glav_anime_manga_2" alt={anime.title}/>
            </Button>
          ))}
        </div>
      </div>
      <div className="Rekomenduemoe_2">
        <div className="h1_glavnaja_rekomedancie">
          <Typography variant="h5" color="initial">Рекомендации по Манги:</Typography>
        </div>

        <div className="cards-row">

        </div>
      </div>
    </div>
  );
};

export default HomePage;
