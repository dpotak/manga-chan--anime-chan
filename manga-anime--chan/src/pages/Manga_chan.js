import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography , Avatar , CardHeader } from '@mui/material';
import axios from "axios";

import './manga_chan_folder/manga_chan_1.css';
import './manga_chan_folder/manga_chan_2.css';
import './manga_chan_folder/manga_content_chan.css';
import './manga_chan_folder/manga_chan_particles.css';

import { Manga_Pages_Transition } from "../hooks/Manga_Pages_Transition";
import { MangaPage_Translator } from "../hooks/MangaPage_Translator";
import { background_partijs } from "../background_for_page/background_partijs";

// Пути до постреров мангов
import Manga_Chainsaw_Man_manga from "./manga_chan_folder_foto/chainsaw_man_manga.png";
import Inuyasha_manga from "./manga_chan_folder_foto/Inuyasha.png";
import One_Piece_manga from "./manga_chan_folder_foto/One_Piece.png";
import Demon_Slayer_manga from "./manga_chan_folder_foto/Demon_Slayer_manga.png";
import Kusuriya_No_Hitorigoto_manga from "./manga_chan_folder_foto/Kusuriya_no_Hitorigoto.png";
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

import icon_register from "./icon/register_nick.png";

import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

const Manga_chan = () => {
  useEffect(() => {
    background_partijs();
  }, []);
  
const { t, changeLanguage } = MangaPage_Translator();
Manga_Pages_Transition(); 


  // 🔹 Список жанров
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
    "Horror",
  ];

  // 🔹 База манги
  const mangaList = [
    { title: "Chainsaw Man", genre: "Shonen", description: "История о парне с бензопилой.", poster: Manga_Chainsaw_Man_manga },
    { title: "Demon Slayer", genre: "Action", description: "Охота на демонов и сила семьи.", poster: Demon_Slayer_manga },
    { title: "Inuyasha", genre: "Fantasy", description: "Девушка из будущего и демон с мечом.", poster: Inuyasha_manga },
    { title: "Kusuriya no Hitorigoto", genre: "Josei", description: "Таинственная придворная аптекарша.", poster: Kusuriya_No_Hitorigoto_manga },
    { title: "One Piece", genre: "Adventure", description: "Пираты, море и мечта о свободе.", poster: One_Piece_manga },
  ];

  // 🔹 Состояния
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showGenres, setShowGenres] = useState(false);

  // 🔹 Фильтрация манги
  const filteredManga = mangaList.filter(manga => {
    const matchesSearch = manga.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? manga.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });

    // --- Поисковая строка с API и автоподсказками ---
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

// задержка для запросов
useEffect(() => {
  if (!query) {
    setSuggestions([]);
    return;
  }

  const delay = setTimeout(() => {
    axios
      .get(`/api/search?query=${query}`)
      .then((res) => setSuggestions(res.data))
      .catch(() => setSuggestions([]));
  }, 300);

  return () => clearTimeout(delay);
}, [query]);

  return (
    <div>
      <div className="header">

        <div className="glavnaja_icon_TEXT">
          <Link to={"/"}><img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img></Link>
          <h1 className="Glavnaja_1">Manga-chan</h1>
        </div>        

        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn"> { t.catalog } </button>
            <div className="dropdown-content">
              <Link to="/Manga_chan"> {t.Manga_catalog} </Link>
              <Link to="/Anime_chan"> {t.Anime_catalog} </Link>
            </div>
          </div>

          <Link to="/"> {t.home} </Link>
          <Link to="/ForumPage"> {t.forum} </Link>
          <Link to="/NewsPage"> {t.news} </Link>
          <Link to="/QuestionsPage"> {t.faq} </Link>
          <Link to="/Contacts"> {t.contacts} </Link>
          <Link to="/RegisterPage"> {t.login} </Link>

          {/* Поисковая строка */}
                  {/* Поисковая строка с auto-suggest */}
                  <div className="search-wrapper">
                    <form id="searchForm" onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                      />
                                  
                        <button type="submit"></button>
                      </form>
                                  
                       {/* Выпадающий список подсказок */}
                       {isFocused && suggestions.length > 0 && (
                         <ul className="suggestions-list">
                           {suggestions.map((item, index) => (
                             <li key={index}>
                               <Link to={`/Search/${item.title}`}>{item.title}</Link>
                             </li>
                           ))}
                         </ul>
                       )}
                     </div>
          

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
              <button className="white_btn">
                <img src={berjuzovii_perehod} width="20" height="20"></img>
              </button>
              <button className="black_btn">
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

      {/* Модуль particles */}
      <div id="particles-js"></div>
      <div class="count-particles"><span class="js-count-particles"></span></div> 

      <div className="form_search_table">
        <div className="form_search">
          <form id="searchForm" onSubmit={(e) => e.preventDefault()}>
            <input
              className="input_search"
              type="text"
              placeholder="Искать мангу по названию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="Manga_Janri">
              <input
                className="manga_content_janr"
                type="text"
                placeholder="Выбрать жанр..."
                value={selectedGenre}
                onFocus={() => setShowGenres(true)}
                onBlur={() => setTimeout(() => setShowGenres(false), 100)}
                readOnly
              />
              {showGenres && (
                <ul className="genre_list">
                  {genres.map((genre, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedGenre(genre);
                        setShowGenres(false);
                      }}
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>

        <div className="List_manga_read">
          <h2 className="list_manga_name">Список манги</h2>

          <div className="manga_list_background">
            {filteredManga.length > 0 ? (
                filteredManga.map((manga, index) => (
                <Card key={index} className="manga_card">
                  <div className="poster_container">
                    <img src={manga.poster} alt={manga.title} className="poster_img" />
                    <div className="poster_overlay"></div>
                    <div className="poster_text">
                      <h3>{manga.title}</h3>   
                      <p>{manga.genre}</p>
                      <Link to={`/Manga/${encodeURIComponent(manga.title)}`}>
                      <Button
                      variant="contained"
                      color="primary"
                      className="read_button"
                      >
                        Читать →
                      </Button>
                    </Link>

                      </div>
                    </div>
                </Card>
              ))
            ) : (
              <Typography variant="body1" color="text.secondary" style={{ marginTop: "20px" }}>
                Манга не найдена 
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manga_chan;
