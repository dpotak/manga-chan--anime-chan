import React from "react";
import "./styles_css_forum/obsujdenie.css";
import "./styles_css_forum/obsijdenie_2.css";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg'; 
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { ForumPages_Transition } from "../hooks/ForumPages_Transition";

const ForumPage = () => {
  ForumPages_Transition(); // активируем плавные переходы

  return (
    <div>
      <div className="header">
        <h1>Manga-chan--Anime-chan: Обсуждение</h1> 

        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn">Каталог</button>
            <div className="dropdown-content">
              <a href="/Manga_chan">Манга</a>
              <a href="/Anime_chan">Аниме</a>
            </div>
          </div>

          <a href="/">Главная</a>
          <a href="/forum">Обсуждение</a>
          <a href="/NewsPage">Новости</a>
          <a href="/QuestionsPage">Вопросы и ответы</a>
          <a href="/RegisterPage">Регистрация/Войти</a>
          
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
    </div>
  );
};

export default ForumPage;
