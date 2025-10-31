import React, { useEffect, useState, useRef } from "react";
import "./styles_css_forum/obsujdenie.css";
import "./styles_css_forum/obsijdenie_2.css";
import "./styles_css_forum/particlesjs_forum.css";
import "./styles_css_forum/forms_website_obs.css";
import britainFlag from "./foto/britain_flags.png";
import russianFlag from "./foto/russian_flag.jpg";
import estonianflag from "./foto/estonian.png";
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";
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
  const { t, changeLanguage } = useForumPagesPageTranslator();
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
              Обсуждение аниме
            </button>
            <button
              id="changeButton_manga"
              className="btn_2_kvad"
              onClick={() => setActiveForum("manga")}
            >
              Обсуждение манги
            </button>
            <button
              id="changeButton_news"
              className="btn_1_kvad"
              onClick={() => setActiveForum("news")}
            >
              Новости индустрии
            </button>
            <button
              id="changeButton_FanArt"
              className="btn_2_kvad"
              onClick={() => setActiveForum("fanart")}
            >
              Фан-арт и творчество
            </button>
          </div>

          {/* Основной блок форума */}
          <div className="kvadrat_forum">
            <div className="kavdrat_forum_Nr_two">
              <p className="Text_glavnaja">
                {activeForum === "anime" && "Обсуждение аниме"}
                {activeForum === "manga" && "Обсуждение манги"}
                {activeForum === "news" && "Новости индустрии"}
                {activeForum === "fanart" && "Фан-арт и творчество"}
              </p>
            </div>

            <div className="forum_container">
              {/* Сайдбар */}
              <div className="forum_sidebar">
                <input
                  type="text"
                  placeholder="Введите тему..."
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
                <button onClick={addTopic}>Создать тему</button>
              </div>

              {/* Контент */}
              <div className="forum_content">
                {forums[activeForum].length === 0 ? (
                  <p>Пока нет обсуждений</p>
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
          placeholder="Напишите сообщение..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default ForumPage;
