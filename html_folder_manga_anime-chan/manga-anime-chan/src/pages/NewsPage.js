import React from "react";
import britainFlag from '../pages/foto/britain_flags.png';
import russianFlag from '../pages/foto/russian_flag.jpg';

const NewsPage = () => (
  <div class="header">
  <h1>Manga-chan--Anime-chan: Новости</h1>

  <nav class="nav-bar">
    <div class="dropdown">
      <button class="dropbtn">Каталог</button>
      <div class="dropdown-content">
        <a href="manga-chan.html">Манга</a>
        <a href="anime-chan.html">Аниме</a>
      </div>
    </div>

    <a href="/">Главная</a>
    <a href="/forum">Обсуждение</a>
    <a href="/NewsPage">Новости</a>
    <a href="/QuestionsPage">Вопросы и ответы</a>
    <a href="/registerPage">Регистрация/Войти</a>


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
export default NewsPage;