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
import "./manga_anime_Details/AnimeDetails_websitestyles.css";

// подключенные файлы JS
import { Anime_Details_Translator } from "../hooks/Anime_Details_Translator";
import { AnimeDetails_transitions } from "../hooks/AnimeDetails_transitions";

const AnimeDetailsPage = () => {
  useEffect(() => {
    background_partijs();
  }, []);

  const { title } = useParams();
  const { t, changeLanguage } = Anime_Details_Translator();

  AnimeDetails_transitions();

  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [audioLang, setAudioLang] = useState("ru" , "en" , "ee"); // ru | en | ee

  // 🎥 СЕРИИ С ГРУППИРОВКОЙ ПО ЯЗЫКАМ
  const animeEpisodes = {
    "Demon Slayer": {
      ru: [
        { name: "Серия 1", file: "/anime_video/Demon_Slayer/ru/episode1.mp4" },
        { name: "Серия 2", file: "/anime_video/Demon_Slayer/ru/episode2.mp4" },
        { name: "Серия 3", file: "/anime_video/Demon_Slayer/ru/episode3.mp4" },
        { name: "Серия 4", file: "/anime_video/Demon_Slayer/ru/episode3.mp4" },
      ],
      en: [
        { name: "Episode 1", file: "/anime_video/Demon_Slayer/en/episode1.mp4" },
        { name: "Episode 2", file: "/anime_video/Demon_Slayer/en/episode2.mp4" },
      ],
      ee: [
        { name: "Osa 1", file: "/anime_video/Demon_Slayer/ee/episode1.mp4" },
      ],
    },

    "Chainsaw Man": {
      ru: [
        { name: "Серия 1", file: "/anime_video/Chainsaw_Man/ru/episode1.mp4" },
      ],
      en: [],
      ee: [],
    },

    "Inuyasha": {
      ru: [
        { name: "Серия 1", file: "/anime_video/Inuyasha/ru/episode1.mp4" },
      ],
      en: [],
      ee: [],
    },
  };

  const decodedTitle = decodeURIComponent(title);
  const episodes = animeEpisodes[decodedTitle]?.[audioLang] || [];

  // сброс серии при смене языка
  useEffect(() => {
    setSelectedEpisode(null);
  }, [audioLang]);


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

      {audioLang === "ru" && (
  <div className="perevodi_annime_subtitles">

    <div className="perevod_sub_btn_1">
      <button className="btn_perevod_1">AniLibria</button>
      <button className="btn_perevod_2">AniDUB</button>
      <button className="btn_perevod_3">TVShows</button>
    </div>

    <div className="perevod_sub_btn_2">
      <button className="btn_perevod_4">AniFilm</button>
      <button className="btn_perevod_5">Animedia</button>
      <button className="btn_perevod_6">Оригинал (Субтитры)</button>
    </div>

    <div className="perevod_sub_btn_3">
      <button className="btn_perevod_7">Дубляж</button>
      <button className="btn_perevod_8">Shiza Project</button>
    </div>

  </div>
)}

{audioLang === "en" && (
  <div className="perevodi_annime_subtitles">

    <div className="perevod_sub_btn_1">
      <button className="btn_perevod_en_1">Original</button>
      <button className="btn_perevod_en_2">English Dub</button>
    </div>

    <div className="perevod_sub_btn_2">
      <button className="btn_perevod_en_3">Subtitles</button>
    </div>

  </div>
)}

{audioLang === "ee" && (
  <div className="perevodi_annime_subtitles">

    <div className="perevod_sub_btn_1">
      <button className="btn_perevod_ee_1">Original</button>
      <button className="btn_perevod_ee_2">Subtiitrid</button>
    </div>

  </div>
)}


 {/* СЕРИИ */}
        {episodes.length > 0 ? (
          <>
            <div className="btn_serii_group">
              {episodes.map((ep, index) => (
                <Button
                  key={index}
                  className="btn_serii_1"
                  color="black"
                  variant={selectedEpisode === ep ? "contained" : "outlined"}
                  onClick={() => setSelectedEpisode(ep)}
                >
                  {ep.name}
                </Button>
              ))}
            </div>

            {selectedEpisode && (
              <div style={{ marginTop: "20px" }}>
                <Typography variant="h6">{selectedEpisode.name}</Typography>
                <video key={selectedEpisode.file} controls width="100%">
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


      {/* Квадрат где будут показываться аниме или манга */}
    <div className="kvadrat_AnimeChan">

      <div className="kvadrat_black_anime">
        <div className="kvadrat_gray_anime">
          <button className="old_serii_btn">Предыдущая серия</button>
          <button className="new_serii_btn">Следующая серия</button>

          {/* Звезды для рейтинга */}
          <div className="kvadrat_gray_2_anime">
            <div className="p_opisanie_reitinga">
              <h3 className="h3_reiting">Рейтинг аниме:</h3>
            </div>

            {/* Сами звезды */}
           <div className="simple-rating">
  <div className="simple-rating_items">

    <input
      type="radio"
      id="simple-rating_5"
      name="simple-rating"
      value="5"
      className="simple-rating_item"
    />
    <label htmlFor="simple-rating_5" className="simple-rating_label"></label>

    <input
      type="radio"
      id="simple-rating_4"
      name="simple-rating"
      value="4"
      className="simple-rating_item"
    />
    <label htmlFor="simple-rating_4" className="simple-rating_label"></label>

    <input
      type="radio"
      id="simple-rating_3"
      name="simple-rating"
      value="3"
      className="simple-rating_item"
    />
    <label htmlFor="simple-rating_3" className="simple-rating_label"></label>

    <input
      type="radio"
      id="simple-rating_2"
      name="simple-rating"
      value="2"
      className="simple-rating_item"
    />
    <label htmlFor="simple-rating_2" className="simple-rating_label"></label>

    <input
      type="radio"
      id="simple-rating_1"
      name="simple-rating"
      value="1"
      className="simple-rating_item"
    />
    <label htmlFor="simple-rating_1" className="simple-rating_label"></label>

  </div>
</div>

            <div className="btn_rating_class">
              <button className="btn_rating_1_anime">Отправить</button>
            </div>

          </div>

        </div>
          
      </div>
    </div>



      {/* ПЕРЕКЛЮЧЕНИЕ ОЗВУЧКИ */}
      <div className="language_anime_watch">
        <button className="ENG_manga" onClick={() => setAudioLang("en")}>
          <img src={britainFlag} width="45" height="45" alt="EN" />
        </button>
        <button className="RUS_Manga" onClick={() => setAudioLang("ru")}>
          <img src={russianFlag} width="45" height="45" alt="RU" />
        </button>
        <button className="EST_Manga" onClick={() => setAudioLang("ee")}>
          <img src={estonianflag} width="45" height="45" alt="EE" />
        </button>
      </div>

       {/* Комментарии к манги */}
      <div className="commentary_content_anime">
        <div className="textrea_content_content_anime">

        </div>

        <div className="commentary_push_btn_anime">

        </div>
        
      </div>

      <div className="commentary_content_text_anime"></div>

    </div>
  );
};

export default AnimeDetailsPage;
