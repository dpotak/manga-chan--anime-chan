import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import './otvetinavoprosi_folder_css/otvetinavoprosi.css';
import './otvetinavoprosi_folder_css/otvetinavoprosi_2.css'; 
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { QuestionsPages_Transition } from "../hooks/QuestionsPages_Transition";
// import {} from "";
import { Link } from "react-router-dom";

const QuestionsPage = () => (
  <div>
    <div class="header">
      <h1>Manga-chan--Anime-chan: Ответы на вопросы</h1>
      
      <nav class="nav-bar">
        <div class="dropdown">
          <button class="dropbtn">Каталог</button>
        <div class="dropdown-content">
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
    </div>
  </nav>
  </div>
  <div className="Questions_1">
    <h1>Часто задаваемые вопросы: </h1>
  </div>

  <section className="FAQ">
    <div className="Questions_one">

      <div className="Questions">
        <div className="Questions_title">
          <h4>What is HTML?</h4>
          <div className="Questions_togle">
            <i className="fa-solid fa-plus open"></i>
            <i className="fa-solid fa-minus close"></i>
          </div>
        </div>
      </div>
      
      <div className="Questions_content">
        <p className="text">
          Lorem jiuwehfy bfwebf efveyf Lorem ygfyegfs
        </p>
      </div>

      <div className="Questions">
        <div className="Questions_title">
          <h4>What is HTML?</h4>
          <div className="Questions_togle">
            <i className="fa-solid fa-plus open"></i>
            <i className="fa-solid fa-minus close"></i>
          </div>
        </div>
      </div>

      <div className="Questions_content">
        <p className="text">
          Lorem jiuwehfy bfwebf efveyf Lorem ygfyegfs
        </p>
      </div>

      <div className="Questions">
        <div className="Questions_title">
          <h4>What is HTML?</h4>
          <div className="Questions_togle">
            <i className="fa-solid fa-plus open"></i>
            <i className="fa-solid fa-minus close"></i>
          </div>
        </div>
      </div>

      <div className="Questions_content">
        <p className="text">
          Lorem jiuwehfy bfwebf efveyf Lorem ygfyegfs
        </p>
      </div>

      <div className="Questions">
        <div className="Questions_title">
          <h4>What is HTML?</h4>
          <div className="Questions_togle">
            <i className="fa-solid fa-plus open"></i>
            <i className="fa-solid fa-minus close"></i>
          </div>
        </div>
      </div>

      <div className="Questions_content">
        <p className="text">
          Lorem jiuwehfy bfwebf efveyf Lorem ygfyegfs
        </p>
      </div>

      <div className="Questions">
        <div className="Questions_title">
          <h4>What is HTML?</h4>
          <div className="Questions_togle">
            <i className="fa-solid fa-plus open"></i>
            <i className="fa-solid fa-minus close"></i>
          </div>
        </div>
      </div>

      <div className="Questions_content">
        <p className="text">
          Lorem jiuwehfy bfwebf efveyf Lorem ygfyegfs
        </p>
      </div>
    </div>
  </section>
  
  
  <div className="Questions_oma_1">
    <a href=""><button>Наши контанкты</button></a>
  </div>

  </div>
);
export default QuestionsPage;