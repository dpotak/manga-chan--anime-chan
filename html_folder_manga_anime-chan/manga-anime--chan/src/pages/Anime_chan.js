import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import './anime_chan_folder/anime_chan_1.css';
import './anime_chan_folder/anime_chan_2.css';
import { Button, Card, CardContent, Typography, CardHeader, Avatar, IconButton ,Collapse } from '@mui/material';
import { Anime_Pages_Transition } from "../hooks/Anime_Pages_Transition";
import { AnimePageTranslator } from "../hooks/AnimePages_Translator";
import { background_partijs } from "../background_for_page/background_partijs";
import { Link } from "react-router-dom";


// База данных с постерами для аниме
import chainsaw_man_anime from "./anime_chan_folder_foto/Chanisaw.png";
import monolog_Formacevta_anime from "./anime_chan_folder_foto/monologFormacevta.png";
import DemonSlayer_anime from "./anime_chan_folder_foto/DemonSlayer.png";
import inuyasha_anime from "./anime_chan_folder_foto/inuyasha.png";
import OnePiece_anime from "./anime_chan_folder_foto/OnePiece.png";

const Anime_chan = () => {
  // вызываем твой хук для плавных переходов
  Anime_Pages_Transition();
  const { t, changeLanguage } = AnimePageTranslator();

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
        
      // Список манги
      const ListAnime = [
          { title: "Chainsaw Man", genre: "Shonen", description: "История о парне с бензопилой.", poster: chainsaw_man_anime },
          { title: "Demon Slayer", genre: "Action", description: "Охота на демонов и сила семьи.", poster: DemonSlayer_anime },
          { title: "Inuyasha", genre: "Fantasy", description: "Девушка из будущего и демон с мечом.", poster: inuyasha_anime },
          { title: "Kusuriya no Hitorigoto", genre: "Josei", description: "Таинственная придворная аптекарша.", poster: monolog_Formacevta_anime },
          { title: "One Piece", genre: "Adventure", description: "Пираты, море и мечта о свободе.", poster: OnePiece_anime },
        ];
  
  return (
    <div> 
     <div className="header">
             <h1 className="Glavnaja_1" >Anime-chan</h1>
             
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
                <button onClick={() => changeLanguage("en")}>
                  <img src={britainFlag} width="20" height="20" alt="EN" />
                </button>
                <button onClick={() => changeLanguage("ru")}>
                  <img src={russianFlag} width="20" height="20" alt="RU" />
                </button>
                <button onClick={() => changeLanguage("ee")}>
                  <img src={estonianflag} width="20" height="20" alt="EST" />
                </button>
              </div>
             </nav>
           </div>

         <div className="form_search">
           <form id="searchForm">
            <input className="input_search" type="text" placeholder="Искать здесь..." />
            <button type="submit"></button>

            <div className="Anime_Janri">
              <form id="form_search">
              <input className="anime_content_janr" type="" placeholder=""></input>
            </form>
            </div>
          </form>
        </div>

        <div className="anime_list_section">
        <h2 className="anime_list_title">Список аниме</h2>

        <div className="anime_card_container">
          {ListAnime.map((anime, index) => (
            <Card key={index} className="anime_card">
              <div className="anime_poster_container">
                <img src={anime.poster} alt={anime.title} className="anime_poster" />
                <div className="anime_poster_overlay" />
              </div>
              <CardHeader
                avatar={<Avatar>{anime.title.charAt(0)}</Avatar>}
                title={anime.title}
                subheader={anime.genre}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {anime.description}
                </Typography>
                <Link to={`/AnimeDetailsPage/${encodeURIComponent(anime.title)}`}>
                  <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
                    Смотреть →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Anime_chan;

