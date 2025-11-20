import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import "./styles_css_forum/obsujdenie.css";
import "./styles_css_forum/obsijdenie_2.css";
import "./styles_css_forum/particlesjs_forum.css";
import "./styles_css_forum/forms_website_obs.css";

import britainFlag from "./foto/britain_flags.png";
import russianFlag from "./foto/russian_flag.jpg";
import estonianflag from "./foto/estonian.png";
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";
import icon_register from "./icon/register_nick.png";

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

import {
  Button,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  Collapse,
  TextField,
} from "@mui/material";
import {
  ForumPages_Transition,
  useForumPages_Transition,
} from "../hooks/ForumPages_Transition";
import { useForumPagesPageTranslator } from "../hooks/ForumPages_Translator";
import { background_partijs } from "../background_for_page/background_partijs";
import { Link } from "react-router-dom";

const ForumPage = () => {
  useForumPages_Transition();

  const [activeForum, setActiveForum] = useState("anime");
  const [forums, setForums] = useState(() => {
    const saved = localStorage.getItem("forumsData");
    return saved
      ? JSON.parse(saved)
      : {
          anime: [],
          manga: [],
          news: [],
          fanart: [],
        };
  });
  const [newTopic, setNewTopic] = useState("");

  useEffect(() => {
    background_partijs();
  }, []);

  const addTopic = () => {
    if (!newTopic.trim()) return;
    const updated = {
      ...forums,
      [activeForum]: [...forums[activeForum], { title: newTopic, messages: [] }],
    };
    setForums(updated);
    localStorage.setItem("forumsData", JSON.stringify(updated));
    setNewTopic("");
  };

  const { t, changeLanguage } = useForumPagesPageTranslator();

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
          <h1 className="Glavnaja_1"> Manga-chan--Anime-chan  {t.h1_name}</h1>
        </div>

        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn">{t.catalog}</button>
            <div className="dropdown-content">
              <Link to="/Manga_chan">{t.Manga_catalog}</Link>
              <Link to="/Anime_chan">{t.Anime_catalog}</Link>
            </div>
          </div>

          <Link to="/">{t.home}</Link>
          <Link to="/ForumPage">{t.forum}</Link>
          <Link to="/NewsPage">{t.news}</Link>
          <Link to="/QuestionsPage">{t.faq}</Link>
          <Link to="/Contacts">{t.contacts}</Link>
          <Link to="/RegisterPage">{t.login}</Link>

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
              <button className="black_btn">
                <img src={black_perehod} width="20" height="20"></img>
              </button>
              <button className="white_btn">
                <img src={berjuzovii_perehod} width="20" height="20"></img>
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

      

      <div className="Forum_text">
        <h1 className="text_h1_forum">{t.text_h1_forum}</h1>
      </div>

      <div className="forum_obs_1">
        <div className="forum_border_kvadrat">
          {/* Переключение разделов */}
          <div className="forum_buttons">
            <button
              id="changeButton_anime"
              className="btn_1_kvad"
              onClick={() => setActiveForum("anime")}
            >
              {t.btn_1_1_kvad}
            </button>
            <button
              id="changeButton_manga"
              className="btn_2_kvad"
              onClick={() => setActiveForum("manga")}
            >
              {t.btn_1_2_kvad}
            </button>
            <button
              id="changeButton_news"
              className="btn_1_kvad"
              onClick={() => setActiveForum("news")}
            >
              {t.btn_2_1_kvad}
            </button>
            <button
              id="changeButton_FanArt"
              className="btn_2_kvad"
              onClick={() => setActiveForum("fanart")}
            >
              {t.btn_2_2_kvad}
            </button>
          </div>

          {/* Основной блок форума */}
          <div className="kvadrat_forum">
            <div className="kavdrat_forum_Nr_two">
              <p className="Text_glavnaja">
                {activeForum === "anime" && t.anime }
                {activeForum === "manga" && t.manga }
                {activeForum === "news" && t.news }
                {activeForum === "fanart" && t.fanart }
              </p>
            </div>

            <div className="forum_container">
              {/* Сайдбар */}
              <div className="forum_sidebar">
                <input
                  type="text"
                  placeholder= {t.forum_sidebar_text}
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
                <button onClick={addTopic}>{t.button_create_chat}</button>
              </div>

              {/* Контент */}
              <div className="forum_content">
                {forums[activeForum].length === 0 ? (
                  <p>{t.forum_content_forms}</p>
                ) : (
                  forums[activeForum].map((topic, i) => (
                    <Topic
                      key={i}
                      topic={topic}
                      forumKey={activeForum}
                      index={i}
                      forums={forums}
                      setForums={setForums}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particles.js */}
      <div id="particles-js"></div>
      <div className="count-particles">
        <span className="js-count-particles"></span>
      </div>
    </div>
  );
};

const Topic = ({ topic, forumKey, index, forums, setForums }) => {
  const [message, setMessage] = useState("");

  const addMessage = () => {
    if (!message.trim()) return;
    const updated = { ...forums };
    updated[forumKey][index].messages.push({ author: "User", text: message });
    setForums(updated);
    localStorage.setItem("forumsData", JSON.stringify(updated));
    setMessage("");
  };

  const { t } = useForumPagesPageTranslator();


  return (
    <div className="topic">
      <h3>{topic.title}</h3>

      <div className="messages_box">
        {topic.messages.map((msg, i) => (
          <p key={i}>
            <strong>{msg.author}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <div className="message_input">
        <input
          type="text"
          placeholder= {t.message_input_text}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={addMessage}>{t.message_input_button}</button>
      </div>
    </div>
  );
};

export default ForumPage;
