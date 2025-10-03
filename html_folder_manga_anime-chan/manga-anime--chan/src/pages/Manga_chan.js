import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import './manga_chan_folder/manga_chan_1.css';
import './manga_chan_folder/manga_chan_2.css';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { Manga_Pages_Transition } from "../hooks/Manga_Pages_Transition";
import { Link } from "react-router-dom";

const Manga_chan = () => (
  <div>
    <div className="header">
            <h1>Manga-chan</h1>
            
            <nav className="nav-bar">
              <div className="dropdown">
                <button className="dropbtn">Каталог</button>
                <div className="dropdown-content">
                  <Link to="/Manga_chan">Манга</Link>
                  <Link to="/Anime_chan">Аниме</Link>
                </div>
              </div>
    
              <Link to="/">Главная</Link>
              <Link to="/ForumPage">Обсуждение</Link>
              <Link to="/NewsPage">Новости</Link>
              <Link to="/QuestionsPage">Вопросы и ответы</Link>
              <Link to="/Contacts">Контакты</Link>  
              <Link to="/RegisterPage">Регистрация/Войти</Link>
    
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
                <button>
                  <img src={estonianflag} width="20" height="20" alt="EST"></img>
                </button>
              </div>
            </nav>
          </div>
  <div className="Janri_1_Anime">
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </div>

</div>
);
export default Manga_chan; 