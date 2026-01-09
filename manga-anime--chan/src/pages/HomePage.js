// подключенные дополнение
import React from "react";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
import icon_register from "./icon/register_nick.png";

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

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
import "./styles/register_pages_code.css";
import "./styles/mode_darklight_homePage.css";
import "./styles/particlesjs.css";
import "./styles/mobile_home.css";

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

  // --- Поисковая строка с API и автоподсказками ---
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

// задержка для запросов
useEffect(() => {
  if (!query) {
    setSuggestions([]);
    return;
  }

  const delay = setTimeout(() => {
    axios
      .get(`/api/search?query=${query}`)
      .then((res) => setSuggestions(res.data))
      .catch(() => setSuggestions([]));
  }, 300);

  return () => clearTimeout(delay);
}, [query]);

useEffect(() => {
  const darkButton = document.getElementById('darkButton');
  const lightButton = document.getElementById('lightButton');
  const body = document.body;

  if (!darkButton || !lightButton) return; // защита от ошибки

  darkButton.addEventListener('click', () => {
    body.classList.add('dark-mode');
  });

  lightButton.addEventListener('click', () => {
    body.classList.remove('dark-mode');
  });

  return () => {
    darkButton.removeEventListener('click', () => {});
    lightButton.removeEventListener('click', () => {});
  };
}, []);


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
         {/* Поисковая строка с auto-suggest */}
         <div className="search-wrapper">
           <form id="searchForm" onSubmit={(e) => e.preventDefault()}>
             <input
               type="text"
               placeholder={t.searchPlaceholder}
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               onFocus={() => setIsFocused(true)}
               onBlur={() => setTimeout(() => setIsFocused(false), 200)}
             />

             <button className="search_btn" type="submit"></button>
           </form>

           {/* Выпадающий список подсказок */}
           {isFocused && suggestions.length > 0 && (
             <ul className="suggestions-list">
               {suggestions.map((item, index) => (
                 <li key={index}>
                   <Link to={`/Search/${item.title}`}>{item.title}</Link>
                 </li>
               ))}
             </ul>
           )}
         </div>


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

            {/* Черный-голубой фон (body) */}
            <div className="white_black_page">
              <button className="white_btn" id="lightButton">
                <img src={berjuzovii_perehod} width="20" height="20"></img>
              </button>
              <button className="black_btn" id="darkButton">
                <img src={black_perehod} width="20" height="20"></img>
              </button>
            </div>

            <div className="register_pages">
              <Link to="/RegisterPage"><button className="btn_register">
                <img src={icon_register} width="50" height="50"></img>
                </button></Link>
            </div>
            
          </div>
        </nav>
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
            
            <div className="title-anime-name">
              <p className="title-anime-p-1" >{t.animeSubtitle}</p>
            </div>
           
          <div className="anime-text-list">

             <div className="Number-text-anime-1">
              <div className="anime-text-1">
              <p className="anime-text-p-1" >{t.animeText1}</p>
            </div>
            <div className="anime-text-2">
              <p className="anime-text-p-2" >{t.animeText2}</p>
            </div>
             </div>

           <div className="Number-text-anime-2">
             <div className="anime-text-3">
              <p className="anime-text-p-3" >{t.animeText3}</p>
            </div>
            <div className="anime-text-4">
              <p className="anime-text-p-4" >{t.animeText4}</p>
            </div>
           </div>

          </div>
            </div>

        <div className="Opisanie_2">
            <Typography variant="h5" color="initial" className="h2_op_2">
                {t.mangaTitle}
            </Typography>
        
        <div className="title-manga-name">
          <p className="title-p-manga-1" >{t.mangaText1}</p>
        </div>

        <div className="manga-text-list">
          
          <div className="Number-text-manga-1">
            <div className="manga-text-1">
              <p className="manga-text-p-1" >{t.mangaText2}</p>
            </div>
            <div className="manga-text-2">
              <p className="manga-text-p-2" >{t.mangaText3}</p>
            </div>
          </div>

        <div className="Number-text-manga-2">
          <div className="manga-text-3">
            <p className="manga-text-p-3" >{t.mangaText4}</p>
          </div>
        </div>
        
        </div>

        </div>
      </div>


       <div className="header_rekomendance">
        {/* Рекомендации по манги и по аниме */}
      <div className="Rekomenduemoe">
        <Typography variant="h5" className="Rekomenduemoe_h5_anime">{t.recommendationsAnime}</Typography>
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
        <Typography variant="h5" className="Rekomenduemoe_h5_manga">{t.recommendationsManga}</Typography>
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
      
    </div>
  );
};

export default HomePage;
