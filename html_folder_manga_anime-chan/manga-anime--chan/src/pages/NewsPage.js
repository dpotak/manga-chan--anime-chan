import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import './nov_folder_css/nowesti.css';
import './nov_folder_css/nowesti_2.css';
import { NewsPages_Transition } from "../hooks/NewsPages_Transition";

const NewsPage = () => {
  NewsPages_Transition(); // <-- хук вызываем внутри компонента

  return (
  <div className="header">
      <h1>Manga-chan--Anime-chan: Новости</h1>
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
  );
};

export default NewsPage;