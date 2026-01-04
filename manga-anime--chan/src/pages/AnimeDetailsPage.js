import React, { useState , useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { background_partijs } from "../background_for_page/background_partijs";

/// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

// 
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

// 
import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

// подключенные файлы CSS 
import "./manga_anime_Details/Anime_details.css";
import "./manga_anime_Details/particles_AnimeDetails.css";
import "./styles/mode_darklight.css";
import "./manga_anime_Details/animedetails_mobile.css";
import "./manga_anime_Details/AnimeDetails_hover.css";

// подключенные файлы JS
import { Anime_Details_Translator } from "../hooks/Anime_Details_Translator";
import { AnimeDetails_transitions } from "../hooks/AnimeDetails_transitions";

const AnimeDetailsPage = () => {
  useEffect(() => {
      background_partijs();
    }, []);

  const { title } = useParams();
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const { t, changeLanguage } = Anime_Details_Translator();

  AnimeDetails_transitions();

  // 🎥 Список серий
  const animeEpisodes = {
    "Chainsaw Man": [
      { name: "Серия 1", file: "/anime_video/Chainsaw_Man/episode1.mp4" },
      { name: "Серия 2", file: "/anime_video/Chainsaw_Man/episode2.mp4" },
    ],
    "Demon Slayer": [
      { name: "Серия 1", file: "/anime_video/Demon_Slayer/episode1.mp4" },
      { name: "Серия 2", file: "/anime_video/Demon_Slayer/episode2.mp4" },
      { name: "Серия 3", file: "/anime_video/Demon_Slayer/episode1.mp4" },
      { name: "Серия 4", file: "/anime_video/Demon_Slayer/episode2.mp4" },
      { name: "Серия 5", file: "/anime_video/Demon_Slayer/episode1.mp4" },
      { name: "Серия 6", file: "/anime_video/Demon_Slayer/episode2.mp4" },
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

  useEffect(() => {
    const darkButton = document.getElementById('darkButton');
    const lightButton = document.getElementById('lightButton');
    const body = document.body;
  
    if (!darkButton || !lightButton) return; // защита от ошибки
  
    darkButton.addEventListener('click', () => {
      body.classList.add('dark-mode');
    });
  
    lightButton.addEventListener('click', () => {
      body.classList.remove('dark-mode');
    });
  
    return () => {
      darkButton.removeEventListener('click', () => {});
      lightButton.removeEventListener('click', () => {});
    };
  }, []);

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

          {/* Черный-голубой фон (body) */}
            <div className="white_black_page">
              <button className="white_btn" id="lightButton">
                <img src={berjuzovii_perehod} width="20" height="20"></img>
              </button>
              <button className="black_btn" id="darkButton">
                <img src={black_perehod} width="20" height="20"></img>
              </button>
            </div>

        </div>
      </nav>
    </div>

    {/* Модуль particles */}
    <div id="particles-js"></div>
    <div class="count-particles"><span class="js-count-particles"></span></div> 

    <div className="opisanie_anime">
      <h2></h2>
      <p></p>
    </div>

      
    <div style={{ padding: "20px" }}>
      <h1>{decodeURIComponent(title)}</h1>
      <Link to="/Anime_chan">
        <Button className="btn_list_anime" variant="outlined" color="blue" style={{ marginBottom: "20px" }}>
          {t.btn_anime_list}
        </Button>
      </Link>

      <div className="perevodi_annime_subtitles">

        <div className="perevod_sub_btn_1">
          <button className="btn_perevod_1">AniLibria</button>
          <button className="btn_perevod_2">AniDUB</button>
          <button className="btn_perevod_3">TVShows</button>
        </div>

        <div className="perevod_sub_btn_2">
          <button className="btn_perevod_4">AniFilm</button>
          <button className="btn_perevod_5">Animedia</button>
          <button className="btn_perevod_6">Оригинал(Субтитры)</button>
        </div>

        <div className="perevod_sub_btn_3">
          <button className="btn_perevod_7">Дубляж</button>
          <button className="btn_perevod_8">Shiza Project</button>
        </div>

    </div>

      {episodes.length > 0 ? (
        <>
          <div className="btn_serii_group" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {episodes.map((ep, index) => (
              <Button
                className="btn_serii_1"
                key={index}
                variant={selectedEpisode === ep ? "contained" : "outlined"}
                color="primary"
                onClick={() => setSelectedEpisode(ep)}>
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
                {t.no_founded_video}
              </video>
            </div>
          )}
        </>
      ) : (
        <p>{t.no_founded_video_not}</p>
      )}
      
    </div>

    <div className="language_anime_watch">

      <div className="ENG_manga">
        <button className="btn_1_for_manga"><img src={britainFlag} width="45px" height="45px" id="ENG_manga"></img></button>
      </div>

      <div className="RUS_Manga">
        <button className="btn_1_for_manga"><img src={russianFlag} width="45px" height="45px" id="RUS_manga"></img></button>
      </div>
      
      <div className="EST_Manga">
        <button className="btn_1_for_manga"><img src={estonianflag} width="45px" height="45px" id="EST_manga"></img></button>
      </div>

    </div>

    </div>
  );
};

export default AnimeDetailsPage;
