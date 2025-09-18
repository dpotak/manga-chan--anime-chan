import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import './anime_chan_folder/anime_chan_1.css';
import './anime_chan_folder/anime_chan_2.css';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { Anime_Pages_Transition } from "../hooks/Anime_Pages_Transition";

const anime_chan = () => (
  <div>
    <h1>Anime-chan</h1> 
  
  <nav class="nav-bar">
    <div class="dropdown">
      <button class="dropbtn">Каталог</button>
      <div class="dropdown-content">
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
);
export default anime_chan; 

