import React from "react";
import "../pages/styles_css_forum/obsujdenie.css";
import "../pages/styles_css_forum/obsijdenie_2.css";
import britainFlag from '../pages/foto/britain_flags.png';
import russianFlag from '../pages/foto/russian_flag.jpg';

const ForumPage = () => (
  <div>
    <div class="header">
  <h1>Manga-chan--Anime-chan: Обсуждение</h1> 

  <nav class="nav-bar">
    <div class="dropdown">
      <button class="dropbtn">Каталог</button>
      <div class="dropdown-content">
        <a href="manga-chan.html">Манга</a>
        <a href="Anime-chan.html">Аниме</a>
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
    
<script src="script_js/obsujdenie.js"></script>
<script src="script_js/script_language.js"></script>
  </div>
);
export default ForumPage;

