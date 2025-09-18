import React from "react"; 
import "./styles/index_chan.css";
import "./styles/index_chan_2.css";
import "./styles/forms_website.css";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import ramka_anime_manga from './foto/ramka_anime_manga.jpg';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { HomePages_Transition } from "../hooks/HomePages_Transition";

const HomePage = () => {
    HomePages_Transition(); 

  return (     
    <div>
      <div className="header">
        <h1>Manga-chan--Anime-chan</h1>
        
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

      <div className="Glav_stanica">
        <h1 className="h1_glavnaja">Смотри аниме и читай мангу!</h1>

        <div className="Opisanie_1">
          <Typography variant="h5" color="initial" className="h2_op_1" >О Аниме:</Typography>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="Opisanie_2">
          <Typography variant="h5" color="initial" className="h2_op_2">О Мангах:</Typography>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="Rekomenduemoe">
        <div className="h1_glavnaja_rekomedancie">
          <Typography variant="h5" color="initial">Рекомендации:</Typography>
        </div>

        <div className="Anime-Manga_glav">
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
          <Button variant="text" color="default">
            <img src={ramka_anime_manga} className="glav_anime_manga_1" width={"95px"} height={"125px"}></img>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
