import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import './nov_folder_css/nowesti.css';
import './nov_folder_css/nowesti_2.css';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { NewsPages_Transition } from "../hooks/NewsPages_Transition";
import { useNewsPagesPageTranslator } from "../hooks/NewsPage_Translator";
import demonslayer from "./news_folder_foto/demonslayer.png";
import { Link } from "react-router-dom";


const NewsPage = () => {
  NewsPages_Transition(); // <-- хук вызываем внутри компонента
  const { t, changeLanguage } = useNewsPagesPageTranslator();

  return (
    <div>
       <div className="header">
      <h1 className="Glavnaja_1">Manga-chan--Anime-chan: {t.news_h1_2} </h1>
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

  <div className="News_text_h1">
    <h1 className="news_h1"> {t.news_h1} </h1>
  </div>

  {/* Карточки для новостей */}
  <div className="News_Content">

    <div class="card-header">
      <h1 className="card-header_h1"> {t.news_language_translate} </h1>
      <img className="img_footer_h1" src={ demonslayer } width="" height="" ></img>
      <div className="">
        <strong></strong>
        <p className="p_news_1"></p>
        <button className="btn_news_1">{t.btn_news_1}</button>
      </div>
    </div>

    <div class="card-body">
      <h1 className="card-body_h1"> {t.news_language_translate} </h1>
      <img className="img_footer_h1" src={ demonslayer } width="" height="" ></img>
      <div className="">
        <strong></strong>
        <p className="p_news_1"></p>
        <button className="btn_news_1"> {t.btn_news_1} </button>
      </div>
    </div>

    <div class="card-footer">
      <h1 className="card-footer_h1"> {t.news_language_translate} </h1>
      <img className="img_footer_h1" src={ demonslayer } width="" height="" ></img>
      <div className="">
        <strong></strong>
        <p className="p_news_1"></p>
        <button className="btn_news_1">{t.btn_news_1}</button>
      </div>
    </div>

    <div class="card-hooter">
      <h1 className="card-hooter_h1"> {t.news_language_translate} </h1>
      <img className="img_footer_h1" src={ demonslayer } width="" height="" ></img>
      <div className="">
        <strong></strong>
        <p className="p_news_1"></p>
        <button className="btn_news_1">{t.btn_news_1}</button>
      </div>
    </div>

  </div>
    </div>
    
  );
};

export default NewsPage;