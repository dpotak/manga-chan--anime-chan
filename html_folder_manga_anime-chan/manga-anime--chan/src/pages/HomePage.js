import React from "react";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import { Button, Typography } from '@mui/material';
import { useHomePagesTransition } from "../hooks/HomePages_Transition";
import { useHomePageTranslator } from "../hooks/HomePage_translator";
import { background_partijs } from "../background_for_page/background_partijs";
import ramka_anime_manga from './foto/ramka_anime_manga.jpg';
import Chanisaw from './ramka_anime_folder/Chanisaw.jpg';
import kusuriyanohi_2season from './ramka_anime_folder/kusuriyanohi_2season.jpg';
import inuyasha from './ramka_anime_folder/inuyasha.jpg';
import kusuriyanohitorigoto_1season from './ramka_anime_folder/kusuriyanohitorigoto_1season.jpg';
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";
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
  
  const animeImages = [
    { title: "Chanisaw", poster: Chanisaw },
    { title: "Kusuriyanohi 2", poster: kusuriyanohi_2season },
    { title: "Kusuriyanohitorigoto 1", poster: kusuriyanohitorigoto_1season },
    { title: "Inuyasha", poster: inuyasha },
  ];

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
  const shuffledImages = shuffleArray(animeImages);


  return (
    <div id="page-container">
      <div className="header">

        <div className="glavnaja_icon_TEXT">
          <img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img>
          <h1 className="Glavnaja_1"> Manga-chan--Anime-chan </h1>
        </div>

        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn">{t.catalog}</button>
            <div className="dropdown-content">
              <Link to="/Manga_chan"> {t.Manga_catalog} </Link>
              <Link to="/Anime_chan"> {t.Anime_catalog} </Link>
            </div>
          </div>

          <Link to="/">{t.home}</Link>
          <Link to="/ForumPage">{t.forum}</Link>
          <Link to="/NewsPage">{t.news}</Link>
          <Link to="/QuestionsPage">{t.faq}</Link>
          <Link to="/Contacts">{t.contacts}</Link>
          <Link to="/RegisterPage">{t.login}</Link>

          <form id="searchForm">
            <input type="text" placeholder={t.searchPlaceholder} />
            <button type="submit"></button>
          </form>

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

      <div id="particles-js"></div>
      <div class="count-particles"><span class="js-count-particles"></span></div> 

      <div className="Glav_stanica">
        <h1 className="h1_glavnaja">{t.headline}</h1>
        <div className="project-description">
          <p>
            <strong>Manga-Anime-Chan</strong> — {t.description}
          </p>
        </div>

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

      <div className="Rekomenduemoe">
        <Typography variant="h5">{t.recommendationsAnime}</Typography>
        <div className="cards-row">
          {shuffledImages.map((anime, index) => (
        <Link 
        key={index} 
        to="/AnimeDetailsPage"
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
    {shuffledImages.map((anime, index) => (
      <Link 
        key={index} 
        to="/MangaDetailsPage"
        className="manga-link"
      >
        <Button variant="text" color="default" className="btn_manga">
          <img src={ramka_anime_manga} className="glav_anime_manga_1" alt="рамка"/>
          <img src={anime.poster} className="glav_anime_manga_2" alt={anime.title}/>
        </Button>
      </Link>
    ))}
  </div>
</div>

    </div>
  );
};

export default HomePage;
