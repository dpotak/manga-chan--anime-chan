import React from "react"; 
import { useEffect , useState } from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import "./contacts_folder_css/contacts_1.css";
import "./contacts_folder_css/particlesjs_contacts.css";
import "./contacts_folder_css/contacts_websiteForms.css";
import { Link } from "react-router-dom";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Instagram_foto from './contacts_folders_foto/instagram.png';
import Telegram_foto from './contacts_folders_foto/telega.png';
import Boosty_foto from './contacts_folders_foto/download.png';
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";
import Contacts_gmail_socialmedia_questions from './for_sites_watchAnime/contacts_gmail_socialmedia_quations.png';
import { UseContactsPageTranslator } from "../hooks/ContactsPages_translator";
import { UseContact_Pages_Transition } from "../hooks/Contact_Pages_Transition";
import { background_partijs } from "../background_for_page/background_partijs";

const Contacts = () => {
  useEffect(() => {
      background_partijs();
    }, []);

  UseContact_Pages_Transition();
  const { t, changeLanguage } = UseContactsPageTranslator();

  // Функция для копирования email в буфер обмена
  const copyToClipboard = () => {
    navigator.clipboard.writeText("animechan.project@gmail.com")
      .then(() => alert("Email скопирован, можете написать нам!"))
      .catch(err => console.error("Ошибка копирования: ", err));
  };
 
  return (
    <div>
      <div className="header">

        <div className="glavnaja_icon_TEXT">
          <Link to={"/"}><img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img></Link>
          <h1 className="Glavnaja_1"> Manga-chan--Anime-chan  {t.H1_cont_text_2} </h1>
        </div>

        <nav className="nav-bar">
          <div className="dropdown">
            <button className="dropbtn"> {t.dropbtn} </button>
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

      <div id="particles-js"></div>
      <div class="count-particles"> <span class="js-count-particles"></span> </div> 

      <div className="h1_Contacts_text_h1">
        <h1 className="h1_Cont_text"> {t.H1_cont_text} </h1>
      </div>

      <div className="Contacts_info">
        <p>
          <strong> {t.strong_cont} </strong> -
          <p className="p_2"> {t.p_2_1} </p>
          <p className="p_2"> {t.p_2_2} </p>
        </p>
      </div>

      <div className="cont_1">
        <img src={Contacts_gmail_socialmedia_questions} alt="bg" className="bg-img" />

         <div className="h1_contOne">
          <h1> {t.h1_contOne} </h1>
        </div>
        
        <div className="p_info_socialnoi">
          <div className="Instagram-name"> 
            <h2 className="Insta_name"> {t.Instagram_name} </h2>
            <a href="" className="Insta_link">
              <img src={Instagram_foto} width="20px" height="20px"></img>
              </a>
          </div>

          <div className="Boosty-name">
            <h2 className="Boosty_name_2"> {t.Boosty_name} </h2>
             <a href="" className="Boosty_link">
              <img src={Boosty_foto} width="20px" height="20px"></img>
              </a>
          </div>

          <div className="Telegram-name">
            <h2 className="Telega_name"> {t.Telegram_name} </h2>
             <a href="" className="telega_link">
              <img src={Telegram_foto} width="20px" height="20px"></img>
              </a>
          </div>

        </div>
      </div>
      
      <div className="h1_cont_2">
          <h1 className="h1_cont_"> {t.h1_cont_gmail} </h1>
          <button onClick={copyToClipboard}>
             <ContentCopyIcon /> {t.h1_cont_gmail_copy}
             <a href="mailto:animechan.project@gmail.com"><h2>animechan.project@gmail.com</h2></a>
          </button>
        </div>
    </div>
  );
};

export default Contacts;
