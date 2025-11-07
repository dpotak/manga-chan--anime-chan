import React from "react";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

// подключенные модули и другие файлы JS
import { Button, Typography } from '@mui/material';
import { useHomePagesTransition } from "../hooks/HomePages_Transition";
import { useHomePageTranslator } from "../hooks/HomePage_translator";
import { background_partijs } from "../background_for_page/background_partijs";

// для аниме рекомендации
import ramka_anime_manga from './foto/ramka_anime_manga.jpg';
import Chanisaw from './ramka_anime_folder/Chanisaw.jpg';
import kusuriyanohi_2season from './ramka_anime_folder/kusuriyanohi_2season.jpg';
import inuyasha from './ramka_anime_folder/inuyasha.jpg';
import kusuriyanohitorigoto_1season from './ramka_anime_folder/kusuriyanohitorigoto_1season.jpg';
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

// для манга рекомендации
import chainsaw_manga from "./manga_chan_folder_foto/chainsaw_man_manga.png";
import inuyasha_manga from "./manga_chan_folder_foto/Inuyasha.png";
import Demon_Slayer_manga from "./manga_chan_folder_foto/Demon_Slayer_manga.png";
import OnePiece_manga from "./manga_chan_folder_foto/One_Piece.png";
import Kusuriya_no_Hitorigoto_manga from "./manga_chan_folder_foto/Kusuriya_no_Hitorigoto.png";

// подключенные файлы CSS 
import "./styles/index_chan.css";
import "./styles/index_chan_2.css";
import "./styles/forms_website.css";
import "./styles/Scroll_ramka_anime.css";
import "./styles/particlesjs.css";

const HomePage = () => {
    useEffect(() => {
    background_partijs();
  }, []);

  useHomePagesTransition();
  const { t, changeLanguage } = useHomePageTranslator();
  
  // для рекомендации аниме
  const animeImages = [
    { title: "Chanisaw", poster: Chanisaw },
    { title: "Kusuriyanohi 2", poster: kusuriyanohi_2season },
    { title: "Kusuriyanohitorigoto 1", poster: kusuriyanohitorigoto_1season },
    { title: "Inuyasha", poster: inuyasha },
  ];

  // для рекомендации манги
 const mangaImages = [
  { title: "Chainsaw_Man", poster: chainsaw_manga },
  { title: "Inuyasha", poster: inuyasha_manga },
  { title: "Demon_Slayer", poster: Demon_Slayer_manga },
  { title: "OnePiece", poster: OnePiece_manga },
  { title: "Kusuriya_no_Hitorigoto", poster: Kusuriya_no_Hitorigoto_manga },
];

  // для рекомендации манги/аниме
  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
  const shuffledImages = shuffleArray(animeImages);
  const shuffledManga = shuffleArray(mangaImages);

  return (
    <div id="page-container">
      <div className="header">

        {/* Название сайта и логотип */}
        <div className="glavnaja_icon_TEXT">
          <Link to={"/"}><img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img></Link>
          <h1 className="Glavnaja_1"> Manga-chan--Anime-chan </h1>
        </div>

         {/* Основа для ссылок для под-страницы для сайта */}
        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn">{t.catalog}</button>
            <div className="dropdown-content">
              <Link to="/Manga_chan"> {t.Manga_catalog} </Link>
              <Link to="/Anime_chan"> {t.Anime_catalog} </Link>
            </div>
          </div>

           {/* Ссылки на другие под-страницы для сайта */}
          <Link to="/">{t.home}</Link>
          <Link to="/ForumPage">{t.forum}</Link>
          <Link to="/NewsPage">{t.news}</Link>
          <Link to="/QuestionsPage">{t.faq}</Link>
          <Link to="/Contacts">{t.contacts}</Link>
          <Link to="/RegisterPage">{t.login}</Link>

           {/* Поисковая строка */}
          <form id="searchForm">
            <input type="text" placeholder={t.searchPlaceholder} />
            <button type="submit"></button>
          </form>

           {/* Языки для перевода сайта */}
          <div className="language">
            <button onClick={() => changeLanguage("en")}>
              <img src={britainFlag} width="20" height="20" alt="EN" />
            </button>
            <button onClick={() => changeLanguage("ru")}>
              <img src={russianFlag} width="20" height="20" alt="RU" />
            </button>
            <button onClick={() => changeLanguage("ee")}>
              <img src={estonianflag} width="20" height="20" alt="EST" />
            </button>
          </div>
        </nav>
      </div>

      <div className="white_black_page">
        <button className=""></button>
        <button className=""></button>
      </div>

       {/* Модуль particles */}
      <div id="particles-js"></div>
      <div class="count-particles"><span class="js-count-particles"></span></div> 

      {/* Описание самого проекта (сайта) */}
      <div className="Glav_stanica">
        <h1 className="h1_glavnaja">{t.headline}</h1>
        <div className="project-description">
          <p>
            <strong>Manga-Anime-Chan</strong> — {t.description}
          </p>
        </div>

         {/* Описание сайта о аниме и о мангах */}
        <div className="Opisanie_1">
            <Typography variant="h5" color="initial" className="h2_op_1">
                {t.animeTitle}
            </Typography>
            
            <p>{t.animeSubtitle}</p>
            <p>{t.animeText1}</p>
            <p>{t.animeText2}</p>
            </div>

        <div className="Opisanie_2">
            <Typography variant="h5" color="initial" className="h2_op_2">
                {t.mangaTitle}
            </Typography>
        
        <p>{t.mangaText1}</p>
        <p>{t.mangaText2}</p>
        <p>{t.mangaText3}</p>

        </div>
      </div>

       {/* Рекомендации по манги и по аниме */}
      <div className="Rekomenduemoe">
        <Typography variant="h5">{t.recommendationsAnime}</Typography>
        <div className="cards-row">
          {shuffledImages.map((anime, index) => (
        <Link 
        key={index} 
        to={`/AnimeDetailsPage/${anime.title}`}
        className="anime-link"
      >
        <Button variant="text" color="default" className="btn_anime">
          <img src={ramka_anime_manga} className="glav_anime_manga_1" alt="рамка"/>
          <img src={anime.poster} className="glav_anime_manga_2" alt={anime.title}/>
        </Button>
      </Link>
    ))}
  </div>
</div>

<div className="Rekomenduemoe_2">
        <Typography variant="h5">{t.recommendationsManga}</Typography>
        <div className="cards-row">
          {shuffledManga.map((manga, index) => (
            <Link 
              key={index} 
              to={`/Manga/${manga.title}`}
              className="manga-link"
            >
              <Button variant="text" color="default" className="btn_manga">
                <img src={ramka_anime_manga} className="glav_anime_manga_1" alt="рамка"/>
                <img src={manga.poster} className="glav_anime_manga_2" alt={manga.title}/>
              </Button>
            </Link>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default HomePage;
