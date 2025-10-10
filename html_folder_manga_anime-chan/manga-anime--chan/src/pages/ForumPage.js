import React from "react";
import "./styles_css_forum/obsujdenie.css";
import "./styles_css_forum/obsijdenie_2.css";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg'; 
import estonianflag from './foto/estonian.png';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { ForumPages_Transition, useForumPages_Transition } from "../hooks/ForumPages_Transition";
import { useForumPagesPageTranslator } from "../hooks/ForumPages_Translator";
import { Link } from "react-router-dom";

const ForumPage = () => {
  useForumPages_Transition(); // активируем плавные переходы
  const { t, changeLanguage } = useForumPagesPageTranslator();

  return (
    <div>
      <div className="header">
        <h1>Manga-chan--Anime-chan: {t.h1_name} </h1> 

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

      <div className="Forum_text">
        <h1 className="text_h1_forum"> {t.text_h1_forum} </h1>
      </div>

      <div className="forum_obs_1">
        <div className="forum_border_kvadrat">
          <button className=""><img src="" alt=""></img></button>
          <button className=""><img src="" alt=""></img></button>

          <div className="">
            
          </div>
        </div>
      </div>

    </div>

  );
};

export default ForumPage;
