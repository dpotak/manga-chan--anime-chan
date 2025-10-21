import React, { useState } from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import './manga_chan_folder/manga_chan_1.css';
import './manga_chan_folder/manga_chan_2.css';
import './manga_chan_folder/manga_content_chan.css';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { Manga_Pages_Transition } from "../hooks/Manga_Pages_Transition";
import { MangaPage_Translator } from "../hooks/MangaPage_Translator";
import { Link } from "react-router-dom";

const Manga_chan = () => {
  // 🔹 Вызов перехода или анимации
  Manga_Pages_Transition();

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

  const [showGenres, setShowGenres] = useState(false);

  // Список манги
  const list_manga = [
    "Chanisaw",
    "Kusuriyanohi 2 season",
    "Kusuriyanohi 1 season",
    "Inuyasha",
    "DemonSlayer"
  ];

  const [ListManga, setListManga] = useState(false);


  return (
    <div>
      <div className="header">
        <h1 className="Glavnaja_1" >Manga-chan</h1>

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
            <button className="ENG">
              <img src={britainFlag} width="20" height="20" alt="EN" />
            </button>
            <button className="rus">
              <img src={russianFlag} width="20" height="20" alt="RU" />
            </button>
            <button className="EST">
              <img src={estonianflag} width="20" height="20" alt="EST" />
            </button>
          </div>
        </nav>
      </div>

      <div className="form_search_table">
        <div className="form_search">
        <form id="searchForm">
          <input
            className="input_search"
            type="text"
            placeholder="Искать здесь..."
            onFocus={() => setListManga(true)}
            onBlur={() => setTimeout(() => setListManga(false), 100)}
          />
          {ListManga && (
              <ul className="genre_list">
                {list_manga.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            )}

          <div className="Manga_Janri">
            <input
              className="manga_content_janr"
              type="text"
              placeholder="Жанры манги..."
              onFocus={() => setShowGenres(true)}
              onBlur={() => setTimeout(() => setShowGenres(false), 100)}
            />
            {showGenres && (
              <ul className="genre_list">
                {genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            )}
          </div>
        </form>

      </div>

       <div className="List_manga_read">
         <h2 className="list_manga_name">Список манги </h2>
       </div>

      </div>
    </div>
  );
};

export default Manga_chan;
