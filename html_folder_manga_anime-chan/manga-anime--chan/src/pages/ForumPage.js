import React from "react";
import { useEffect , useState , useRef } from "react";
import "./styles_css_forum/obsujdenie.css";
import "./styles_css_forum/obsijdenie_2.css";
import "./styles_css_forum/particlesjs_forum.css";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg'; 
import estonianflag from './foto/estonian.png';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { ForumPages_Transition, useForumPages_Transition } from "../hooks/ForumPages_Transition";
import { useForumPagesPageTranslator } from "../hooks/ForumPages_Translator";
import { background_partijs } from "../background_for_page/background_partijs";
import { Link } from "react-router-dom";

const ForumPage = () => {
  useEffect(() => {
      background_partijs();
    }, []);

  useForumPages_Transition(); // активируем плавные переходы
  const { t, changeLanguage } = useForumPagesPageTranslator();


  const changeTextRef = useRef(null);

  useEffect(() => {
    const changeTextElement = changeTextRef.current;

    document.getElementById('changeButton_anime').addEventListener('click', () => {
      changeTextElement.innerText = 'Обсуждение аниме';
    });

    document.getElementById('changeButton_manga').addEventListener('click', () => {
      changeTextElement.innerText = 'Обсуждение манги';
    });

    document.getElementById('changeButton_news').addEventListener('click', function() {
      changeTextElement.innerText = 'Новости индустрии';
    });

    document.getElementById('changeButton_FanArt').addEventListener('click', function() {
      changeTextElement.innerText = 'Фан-арт и творчество';
    });

  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="Glavnaja_1">Manga-chan--Anime-chan: {t.h1_name} </h1> 

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
          <button className="btn_1_kvad"><img src="" id="changeButton_anime" width="50px" height="30px"></img>Обсуждение аниме</button>
          <button className="btn_2_kvad"><img src="" id="changeButton_manga" width="50px" height="30px"></img>Обсуждение манги</button>
          <button className="btn_1_kvad"><img src="" id="changeButton_news" width="50px" height="30px"></img>Новости индустрии</button>
          <button className="btn_2_kvad"><img src="" id="changeButton_FanArt" width="50px" height="30px"></img>Фан-арт и творчество</button>
          <div className="text_kvadrat_1">
            <button className=""></button>
          </div>
          <div className="kvadrat_forum">

            <div className="kavdrat_forum_Nr_two">
              <p ref={changeTextRef} className="Text_glavnaja">Привествуем вас на нашем форуме!</p>
            </div>

            <div className="text_forKvadrat">

            </div>
            
          </div>
        </div>
      </div>

      <div id="particles-js"></div>
      <div class="count-particles"> <span class="js-count-particles"></span> </div> 

    </div>

  );
};

export default ForumPage;
