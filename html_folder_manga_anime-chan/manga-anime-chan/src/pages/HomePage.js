import React from "react";
import "../pages/styles/index_chan.css";
import "../pages/styles/index_chan_2.css";
import "../pages/styles/forms_website.css";

const HomePage = () => {
  return (
    <div>
      <div className="header">
        <h1>Manga-chan--Anime-chan</h1>
        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn">Каталог</button>
            <div className="dropdown-content">
              <a href="/manga-chan">Манга</a>
              <a href="/anime-chan">Аниме</a>
            </div>
          </div>
          <a href="/">Главная</a>
          <a href="/obsuzhdenie">Обсуждение</a>
          <a href="/novosti">Новости</a>
          <a href="/faq">Вопросы и ответы</a>
          <a href="/register">Регистрация/Войти</a>

          <form id="searchForm">
            <input type="text" placeholder="Искать здесь..." />
            <button type="submit"></button>
          </form>

          <div className="language">
            <button>
              <img src="/foto/britain_flags.png" width="20" height="20" alt="EN" />
            </button>
            <button className="rus">
              <img src="/foto/russian_flag.jpg" width="20" height="20" alt="RU" />
            </button>
          </div>
        </nav>
      </div>

      <div className="Glav_stanica">
        <h1 className="h1_glavnaja">Смотри аниме и читай мангу!</h1>

        <div className="Opisanie_1">
          <h2 className="h2_op_1">О Аниме:</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="Opisanie_2">
          <h2 className="h2_op_2">О Мангах:</h2>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="Rekomenduemoe">
        <div className="h1_glavnaja_rekomedancie">
          <h1>Рекомендации:</h1>
        </div>
        <div className="Anime-Manga_glav"></div>
      </div>
    </div>
  );
};

export default HomePage;
