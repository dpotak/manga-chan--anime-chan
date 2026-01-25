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
import "./manga_anime_Details/mangaDetails_hover.css";
import "./manga_anime_Details/particlesjs_MangaDetails.css";
import "./manga_anime_Details/mangaChanDetails_websiteStyles.css";
import "./styles/mode_darklight.css";

// подключенные модули и другие файлы JS
import { Translator_Manga_Details } from "../hooks/Manga_Details_Translator";
import { MangaDetails_transitions } from "../hooks/MangaDetails_Transitions";
import { background_partijs } from "../background_for_page/background_partijs";


const MangaDetailsPage = () => {
   useEffect(() => {
  try {
    background_partijs();
  } catch (error) {
    console.error("Background particles error:", error);
  }
}, []);

MangaDetails_transitions();

  const { title } = useParams(); // получаем название из URL
  const [mangaLang, setMangaLang] = useState("ru" , "en" , "ee");
  

  // 📚 Список томов (пути к PDF)
  const mangaVolumesRU = {
  "Chainsaw Man": [
    { name: "Том 1", file: "/manga_pdf/ru/chainsaw/vol1.pdf" },
  ],
  "Demon Slayer": [
    { name: "Том 1", file: "/manga_pdf/ru/demonslayer/vol1.pdf" },
  ],
};

const mangaVolumesEN = {
  "Chainsaw Man": [
    { name: "Volume 1", file: "/manga_pdf/en/chainsaw/vol1.pdf" },
  ],
  "Demon Slayer": [
    { name: "Volume 1", file: "/manga_pdf/en/demonslayer/vol1.pdf" },
  ],
};

const mangaVolumesEE = {
  "Chainsaw Man": [
    { name: "1. köide", file: "/manga_pdf/ee/chainsaw/vol1.pdf" },
  ],
  "Demon Slayer": [
    { name: "1. köide", file: "/manga_pdf/ee/demonslayer/vol1.pdf" },
  ],
};


const decodedTitle = decodeURIComponent(title);

let volumes = [];

if (mangaLang === "ru") {
  volumes = mangaVolumesRU[decodedTitle] || [];
} else if (mangaLang === "en") {
  volumes = mangaVolumesEN[decodedTitle] || [];
} else if (mangaLang === "ee") {
  volumes = mangaVolumesEE[decodedTitle] || [];
}

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
        <Button className="btn_list_manga" variant="outlined" color="blue" style={{ marginBottom: "20px"}}>
          {t.btn_list_manga}
        </Button>
      </Link>

      {volumes.length > 0 ? (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    {volumes.map((vol, index) => (
      <a
        key={index}
        href={vol.file}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" color="primary">
          {vol.name}
        </Button>
      </a>
    ))}
  </div>
) : (
  <p>{t.not_list_manga}</p>
)}

    </div>

    {/* Квадрат где будут показываться аниме или манга */}
    <div className="kvadrat_MangaChan">

      <div className="kvadrat_black">
        <div className="kvadrat_gray">
         
         <div className="list_btn_leftAndRight">
           <button className="btn_1_list_left"> влево </button>
           <button className="btn_2_list_right"> направо </button>
         </div>

          <div className="list_enterTom">
            <button className="enter_old_volume">Прошлый том</button>
            <button className="enter_new_volume">Следующий том</button>
          </div>

        </div>

        {/* Звезды для рейтинга */}
        <div className="kvadrat_gray_2">
          <div className="p_opisanie_reitinga">
            <h3 className="h3_reiting">Рейтинг манги:</h3>
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
            <button className="btn_rating_1_manga">Отправить</button>
          </div>

        </div>

      </div>
    </div>


   <div className="language_manga_watch">

  <div className="ENG_manga">
    <button
      className="btn_1_for_manga"
      onClick={() => setMangaLang("en")}
    >
      <img src={britainFlag} width="45" height="45" />
    </button>
  </div>

  <div className="RUS_Manga">
    <button
      className="btn_1_for_manga"
      onClick={() => setMangaLang("ru")}
    >
      <img src={russianFlag} width="45" height="45" />
    </button>
  </div>

  <div className="EST_Manga">
    <button
      className="btn_1_for_manga"
      onClick={() => setMangaLang("ee")}
    >
      <img src={estonianflag} width="45" height="45" />
    </button>
  </div>

</div>


{/* Описание манги/сюжета/название и т.д. */}
    <div className="opisanie_manga">
      <img className="image_manga" src="" width="" height=""></img>
      <h2 className="name-manga"></h2>
    </div>

    <div className="Opisanie_manga_p">
      <p className="p_manga_1"></p>
    </div>

    {/* Комментарии к манги */}
    <div className="commentary_content">

      <div className="textrea_content_content">
        <textarea className="textrea_content" name="comment" placeholder="Введите ваш комментарий..." required></textarea>
      </div>

      <div className="commentary_push_btn">
        <button className="btn_commentary_1">Отправить</button>
      </div>

    </div>
    
   </div>
  );
};


export default MangaDetailsPage;
