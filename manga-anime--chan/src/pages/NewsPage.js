import React from "react";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import axios from "axios";

import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

import './nov_folder_css/nowesti.css';
import './nov_folder_css/nowesti_2.css';
import "./nov_folder_css/particlesjs_news.css";
import "./nov_folder_css/now_form_website.css";
import "./styles/mode_darklight.css"; // 
import "./nov_folder_css/mobile_news.css";

import { NewsPages_Transition } from "../hooks/NewsPages_Transition";
import { useNewsPagesPageTranslator } from "../hooks/NewsPage_Translator";
import { background_partijs } from "../background_for_page/background_partijs";

import demonslayer from "./news_folder_foto/demonslayer.png";
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";
import icon_register from "./icon/register_nick.png";

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";


const NewsPage = () => {
  const [news, setNews] = useState([]); // состояние для новостей
  const [loading, setLoading] = useState(true); // индикатор загрузки

  useEffect(() => {
    background_partijs();
  }, []);

  useEffect(() => {
     // Загружаем новости из Flask API
    const fetchNews = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/news");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  NewsPages_Transition();
  const { t, changeLanguage } = useNewsPagesPageTranslator();

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

       <div className="glavnaja_icon_TEXT">
          <Link to={"/"}><img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img></Link>
          <h1 className="Glavnaja_1"> Manga-chan--Anime-chan {t.news_h1_2} </h1>
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

  <div className="News_text_h1">
    <h1 className="news_h1"> {t.news_h1} </h1>
  </div>

  <div className="News_Content">

   {/* Карточки для новостей */}
      <div className="News_Content">
        {loading ? (
          <p>Загрузка новостей...</p>
        ) : news.length === 0 ? (
          <p>Новости отсутствуют.</p>
        ) : (
          news.map((item, index) => (
            <div key={index} className="card-news">
              <h1 className="card-news_h1">{item.title}</h1>
              <img
                className="img_footer_h1"
                src={demonslayer}
                alt="news"
                width="250"
                height="150"
              />
              <div>
                <p className="p_news_1">{item.content}</p>
                <Link to="/NewsPage_details"><button className="btn_news_1">{t.btn_news_1}</button></Link>
              </div>
            </div>
          ))
        )}
      </div>

    <div id="particles-js"></div>
    <div className="count-particles">
      <span className="js-count-particles"></span>
    </div>

  </div>
</div>
    
  );
};

export default NewsPage;
