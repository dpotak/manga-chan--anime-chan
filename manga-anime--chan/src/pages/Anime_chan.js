import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import axios from "axios";

import { Anime_Pages_Transition } from "../hooks/Anime_Pages_Transition";
import { AnimePageTranslator } from "../hooks/AnimePages_Translator";
import { background_partijs } from "../background_for_page/background_partijs";

import './anime_chan_folder/anime_chan_1.css';
import './anime_chan_folder/anime_chan_2.css';
import './anime_chan_folder/anime_particles.css';
import './anime_chan_folder/animeChan_websiteForms.css';
import "./dark_light_mode/Anime_chan_DarkMode_lightMode.css";
import "./anime_chan_folder/AnimeChan_mobile.css";

// База данных с постерами для аниме
import chainsaw_man_anime from "./anime_chan_folder_foto/Chanisaw.png";
import monolog_Formacevta_anime from "./anime_chan_folder_foto/monologFormacevta.png";
import DemonSlayer_anime from "./anime_chan_folder_foto/DemonSlayer.png";
import inuyasha_anime from "./anime_chan_folder_foto/inuyasha.png";
import OnePiece_anime from "./anime_chan_folder_foto/OnePiece.png";
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

import icon_register from "./icon/register_nick.png";

import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';


const Anime_chan = () => {
  useEffect(() => {
      background_partijs();
    }, []);

// вызываем твой хук для плавных переходов
Anime_Pages_Transition();
const { t, changeLanguage } = AnimePageTranslator();

// Список жанров манги
const genres = [
  "Shonen",
  "Shoujo",
  "Seinen",
  "Josei",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror"
];
        
// Список манги
const ListAnime = [
    { title: "Chainsaw Man", genre: "Shonen", description: "История о парне с бензопилой.", poster: chainsaw_man_anime },
    { title: "Demon Slayer", genre: "Action", description: "Охота на демонов и сила семьи.", poster: DemonSlayer_anime },
    { title: "Inuyasha", genre: "Fantasy", description: "Девушка из будущего и демон с мечом.", poster: inuyasha_anime },
          { title: "Kusuriya no Hitorigoto", genre: "Josei", description: "Таинственная придворная аптекарша.", poster: monolog_Formacevta_anime },
    { title: "One Piece", genre: "Adventure", description: "Пираты, море и мечта о свободе.", poster: OnePiece_anime },
  ];

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
    <div> 
     <div className="header">
      <div className="glavnaja_icon_TEXT">
        <Link to={"/"}><img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img></Link>
       <h1 className="Glavnaja_1" >Anime-chan</h1>
      </div>
             
      <nav className="nav-bar">
        <div className="dropdown">
          <button className="dropbtn">{t.catalog} </button>
          <div className="dropdown-content">
            <Link to="/Manga_chan"> {t.Manga_catalog} </Link>
            <Link to="/Anime_chan">{t.Anime_catalog}</Link>
          </div>
        </div>
     
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
                                
                      <button type="submit"></button>
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

  <div className="form_search">
    <form id="searchForm">
    <input className="input_search" type="text" placeholder={t.searchPlaceholder} />
    <button type="submit"></button>

    <div className="Anime_Janri">
      <form id="form_search">
      <input className="anime_content_janr" type="" placeholder="Поиск по жанру аниме"></input>
    </form>
    </div>
  </form>
</div>

<div className="anime_list_section">
<h2 className="anime_list_title">{t.list_anime}</h2>

      <div className="anime_card_container"> {/* Доделать смену темной-светлой темы для этой страницы */}
        {ListAnime.map((anime, index) => (
          <Card key={index} className="anime_card">
            <div className="anime_poster_container">
                <img src={anime.poster} alt={anime.title} className="anime_poster" />
                <div className="anime_poster_overlay" />
            </div>
            <CardHeader
                avatar={<Avatar>{anime.title.charAt(0)}</Avatar>}
                title={anime.title}
                subheader={anime.genre}
            />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {anime.description}
                </Typography>
                <Link to={`/AnimeDetailsPage/${encodeURIComponent(anime.title)}`}>
                  <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
                    {t.watch_Anime}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Anime_chan;

