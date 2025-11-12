import React from "react";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';

import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

import './nov_folder_css/nowesti.css';
import './nov_folder_css/nowesti_2.css';
import "./nov_folder_css/particlesjs_news.css";
import "./nov_folder_css/now_form_website.css";

import { NewsPages_Transition } from "../hooks/NewsPages_Transition";
import { useNewsPagesPageTranslator } from "../hooks/NewsPage_Translator";
import { background_partijs } from "../background_for_page/background_partijs";

import demonslayer from "./news_folder_foto/demonslayer.png";
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

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

       {/* Черный-голубой фон (body) */}
        <div className="white_black_page">
          <button className="white_btn">
            <img src={berjuzovii_perehod} width="20" height="20"></img>
          </button>
          <button className="black_btn">
             <img src={black_perehod} width="20" height="20"></img>
          </button>
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
                <button className="btn_news_1">{t.btn_news_1}</button>
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
