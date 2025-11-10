import React, { useState , useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { background_partijs } from "../background_for_page/background_partijs";

/// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

// подключенные файлы CSS 
import "./manga_anime_Details/Anime_details.css";
import "./manga_anime_Details/particles_AnimeDetails.css";

// подключенные файлы JS
import { Anime_Details_Translator } from "../hooks/Anime_Details_Translator";

const AnimeDetailsPage = () => {
  useEffect(() => {
      background_partijs();
    }, []);

  const { title } = useParams();
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const { t, changeLanguage } = Anime_Details_Translator();

  // 🎥 Список серий
  const animeEpisodes = {
    "Chainsaw Man": [
      { name: "Серия 1", file: "/anime_video/Chainsaw_Man/episode1.mp4" },
      { name: "Серия 2", file: "/anime_video/Chainsaw_Man/episode2.mp4" },
    ],
    "Demon Slayer": [
      { name: "Серия 1", file: "/anime_video/Demon_Slayer/episode1.mp4" },
      { name: "Серия 2", file: "/anime_video/Demon_Slayer/episode2.mp4" },
    ],
    "Inuyasha": [
      { name: "Серия 1", file: "/anime_video/Inuyasha/episode1.mp4" },
    ],
    "One Piece": [
      { name: "Серия 1", file: "" },
      { name: "Серия 2", file: "" },
      { name: "Серия 3", file: "" },
      { name: "Серия 4", file: "" },
    ],
    "Kusuriya no Hitorigoto": [ // 2 season
      {name: "Серия 2 - 2 сеазон", file: "https://www.dropbox.com/scl/fi/04zfn3cd02y9loxauis8i/2_seria.mp4?rlkey=ojedxvwoj6t06ckiiq9wpd5nj&raw=1"},
    ],
  };

  const episodes = animeEpisodes[decodeURIComponent(title)] || [];

  return (

    <div className="Anime_details_header">
      <div className="header">
        
        {/* Название сайта и логотип */}
        <div className="glavnaja_icon_TEXT">
          <Link to={"/"}><img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img></Link>
          <h1 className="Glavnaja_1"> Manga-chan--Anime-chan </h1>
        </div>

      <nav className="nav-bar">
       <div className="dropdown">
        <button className="dropbtn">{t.catalog}</button>
          <div className="dropdown-content">
            <Link to="/Manga_chan"> {t.Manga_catalog} </Link>
            <Link to="/Anime_chan"> {t.Anime_catalog} </Link>
          </div>
        </div>
       
        <Link to="/">{t.home}</Link>
        <Link to="/ForumPage">{t.forum}</Link>
        <Link to="/NewsPage">{t.news}</Link>
        <Link to="/QuestionsPage">{t.faq}</Link>
        <Link to="/Contacts">{t.contacts}</Link>
        <Link to="/RegisterPage">{t.login}</Link>
       
        {/* Поисковая строка */}
        <form id="searchForm">
          <input type="text" placeholder={t.searchPlaceholder} />
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

    {/* Модуль particles */}
    <div id="particles-js"></div>
    <div class="count-particles"><span class="js-count-particles"></span></div> 

    <div className="opisanie_anime">

    </div>
      
    <div style={{ padding: "20px" }}>
      <h1>{decodeURIComponent(title)}</h1>
      <Link to="/Anime_chan">
        <Button variant="outlined" color="secondary" style={{ marginBottom: "20px" }}>
          ← Назад к списку аниме
        </Button>
      </Link>

      {episodes.length > 0 ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {episodes.map((ep, index) => (
              <Button
                key={index}
                variant={selectedEpisode === ep ? "contained" : "outlined"}
                color="primary"
                onClick={() => setSelectedEpisode(ep)}
              >
                {ep.name}
              </Button>
            ))}
          </div>

          {selectedEpisode && (
            <div style={{ marginTop: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {selectedEpisode.name}
              </Typography>
              <video
                key={selectedEpisode.file}
                controls
                width="100%"
                style={{ borderRadius: "10px" }}
              >
                <source src={selectedEpisode.file} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          )}
        </>
      ) : (
        <p>Серии для этого аниме пока не добавлены.</p>
      )}
    </div>

    </div>
  );
};

export default AnimeDetailsPage;
