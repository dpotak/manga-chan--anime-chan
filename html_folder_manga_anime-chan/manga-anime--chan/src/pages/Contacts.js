import React from "react"; 
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import "./contacts_folder_css/contacts_1.css";
import { Link } from "react-router-dom";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Instagram_foto from './contacts_folders_foto/instagram.png';
import Telegram_foto from './contacts_folders_foto/telega.png';
import Boosty_foto from './contacts_folders_foto/download.png';
import Contacts_gmail_socialmedia_questions from './for_sites_watchAnime/contacts_gmail_socialmedia_quations.png';
import { ContactsPageTranslator } from "../hooks/ContactsPages_translator";

const Contacts = () => {

  // Функция для копирования email в буфер обмена
  const copyToClipboard = () => {
    navigator.clipboard.writeText("animechan.project@gmail.com")
      .then(() => alert("Email скопирован, можете написать нам!"))
      .catch(err => console.error("Ошибка копирования: ", err));
  };
 
  return (
    <div>
      <div className="header">
        <h1>Manga-chan--Anime-chan: Контакты</h1>

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
            <button className="ENG">
              <img src={britainFlag} width="20" height="20" alt="EN" />
            </button>
            <button className="rus">
              <img src={russianFlag} width="20" height="20" alt="RU" />
            </button>
            <button className="EST">
              <img src={estonianflag} width="20" height="20" alt="EST"></img>
            </button>
          </div>
        </nav>
      </div>

      <div className="Contacts_info">
        <p>
          <strong>Если вам понравился наш проект</strong> -
          <p className="p_2">Или вы хотите предложить свою идею для его дальнейший реализации, то напишите нам:</p>
          <p className="p_2">Или вы хотите задать нам свой личный вопрос(ы):</p>
        </p>
      </div>

      <div className="cont_1">
        <img src={Contacts_gmail_socialmedia_questions} alt="bg" className="bg-img" />

         <div className="h1_contOne">
          <h1>В социальных сетях:</h1>
        </div>
        
        <div className="p_info_socialnoi">
          <div className="Instagram-name"> 
            <h2 className="Insta_name">Мы в Инстаграме!</h2>
            <a href="" className="Insta_link">
              <img src={Instagram_foto} width="20px" height="20px"></img>
              </a>
          </div>

          <div className="Boosty-name">
            <h2 className="Boosty_name_2">Мы на Бусти!</h2>
             <a href="" className="Boosty_link">
              <img src={Boosty_foto} width="20px" height="20px"></img>
              </a>
          </div>

          <div className="Telegram-name">
            <h2 className="Telega_name">Мы в Telegram!</h2>
             <a href="" className="telega_link">
              <img src={Telegram_foto} width="20px" height="20px"></img>
              </a>
          </div>

        </div>
      </div>
      
      <div className="h1_cont_2">
          <h1 className="h1_cont_">По электронной почте:</h1>
          <button onClick={copyToClipboard}>
             <ContentCopyIcon /> Скопировать
             <a href="mailto:animechan.project@gmail.com"><h2>animechan.project@gmail.com</h2></a>
          </button>
        </div>
    </div>
  );
};

export default Contacts;
