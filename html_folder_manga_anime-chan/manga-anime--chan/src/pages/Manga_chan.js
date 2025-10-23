import React, { useState } from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import './manga_chan_folder/manga_chan_1.css';
import './manga_chan_folder/manga_chan_2.css';
import './manga_chan_folder/manga_content_chan.css';
import { Button, Card, CardContent, Typography , Avatar , CardHeader } from '@mui/material';
import { Link } from "react-router-dom";
import { Manga_Pages_Transition } from "../hooks/Manga_Pages_Transition";
import { MangaPage_Translator } from "../hooks/MangaPage_Translator";


// Пути до постреров мангов
import Manga_Chainsaw_Man_manga from "./manga_chan_folder_foto/chainsaw_man_manga.png";
import Inuyasha_manga from "./manga_chan_folder_foto/Inuyasha.png";
import One_Piece_manga from "./manga_chan_folder_foto/One_Piece.png";
import Demon_Slayer_manga from "./manga_chan_folder_foto/Demon_Slayer_manga.png";
import Kusuriya_No_Hitorigoto_manga from "./manga_chan_folder_foto/Kusuriya_no_Hitorigoto.png";


const Manga_chan = () => {
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

  return (
    <div>
      <div className="header">
        <h1 className="Glavnaja_1">Manga-chan</h1>

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
          <Link to="/QuestionsPage">FAQ</Link>
          <Link to="/Contacts">Контакты</Link>
          <Link to="/RegisterPage">Регистрация / Вход</Link>

          <div className="language">
            <button><img src={britainFlag} width="20" height="20" alt="EN" /></button>
            <button><img src={russianFlag} width="20" height="20" alt="RU" /></button>
            <button><img src={estonianflag} width="20" height="20" alt="EST" /></button>
          </div>
        </nav>
      </div>

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
