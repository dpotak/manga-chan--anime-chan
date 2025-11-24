import React from "react";
import { useEffect , useState } from "react";
import { useParams , Link } from "react-router-dom";
import { Button, Card, CardContent, Typography , Avatar , CardHeader } from '@mui/material';

/// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

import icon_register from "./icon/register_nick.png";

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

// подключенные файлы CSS 
import "./manga_anime_Details/manga_Details.css";
import "./manga_anime_Details/particlesjs_MangaDetails.css";
import "./styles/mode_darklight.css";

// подключенные модули и другие файлы JS
import { Translator_Manga_Details } from "../hooks/Manga_Details_Translator";
import { background_partijs } from "../background_for_page/background_partijs";


const MangaDetailsPage = () => {
   useEffect(() => {
  try {
    background_partijs();
  } catch (error) {
    console.error("Background particles error:", error);
  }
}, []);

  const { title } = useParams(); // получаем название из URL

  // 📚 Список томов (пути к PDF)
  const mangaVolumes = {
    "Chainsaw Man": [
      { name: "Том 1", file: "" },
      // { name: "Том 2", file: "/manga_pdf/chainsaw_volume2.pdf" },
    ],
    "Demon Slayer": [
      { name: "Том 1", file: "" },
      // { name: "Том 2", file: "/manga_pdf/demonslayer_volume2.pdf" },
    ],
    "Inuyasha": [
      { name: "Том 1", file: "" },
    ],
  };

  const volumes = mangaVolumes[decodeURIComponent(title)] || [];

  const { t, changeLanguage } = Translator_Manga_Details();

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
   <div className="">
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

        {/* Ссылки на другие под-страницы для сайта */}
        <Link to="/">{t.home}</Link>
        <Link to="/ForumPage">{t.forum}</Link>
        <Link to="/NewsPage">{t.news}</Link>
        <Link to="/QuestionsPage">{t.faq}</Link>
        <Link to="/Contacts">{t.contacts}</Link>  
        <Link to="/RegisterPage">{t.login}</Link>

        {/* Поисковая строка */}
        <form id="searchForm">
          <input type="text" placeholder= {t.searchPlaceholder} />
          <button type="submit"></button>
        </form>

         {/* Модуль particles */}
         <div id="particles-js"></div>
         <div class="count-particles"><span class="js-count-particles"></span></div> 

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

            <div className="register_pages">
              <Link to="/RegisterPage"><button className="btn_register">
                <img src={icon_register} width="50" height="50"></img>
                </button></Link>
            </div>
            
        </div>
      </nav>
    </div>
    
    <div style={{ padding: "20px" }}>
      <h1>{decodeURIComponent(title)}</h1>
      <Link to="/Manga_chan">
        <Button variant="outlined" color="secondary" style={{ marginBottom: "20px" }}>
          ← Назад к списку манги
        </Button>
      </Link>

      {volumes.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {volumes.map((vol, index) => (
            <a key={index} href={vol.file} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" color="primary">
                {vol.name}
              </Button>
            </a>
          ))}
        </div>
      ) : (
        <p>Томы для этой манги пока не добавлены.</p>
      )}
    </div>

    <div className="opisanie_manga">
      <img className="image_manga" src="" width="" height=""></img>
      <h2 className="name-manga"></h2>
    </div>

    <div className="Opisanie_manga_p">
      <p className="p_manga_1"></p>
    </div>

   </div>
  );
};


export default MangaDetailsPage;
