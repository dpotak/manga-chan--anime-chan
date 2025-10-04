import React, { useState } from "react";
import { Link } from "react-router-dom";
import britainFlag from "./foto/britain_flags.png";
import russianFlag from "./foto/russian_flag.jpg";
import estonianflag from './foto/estonian.png';
import "./otvetinavoprosi_folder_css/otvetinavoprosi.css";
import "./otvetinavoprosi_folder_css/otvetinavoprosi_2.css";
import { QuestionsPageTranslator } from "../hooks/QuestionsPages_Translator";

const faqData = [
  {
    question: "Что такое HTML?",
    answer:
      "HTML — это язык гипертекстовой разметки, используемый для создания структуры веб-страниц."
  },
  {
    question: "Что такое CSS?",
    answer:
      "CSS — это каскадные таблицы стилей, отвечающие за внешний вид и оформление элементов HTML."
  },
  {
    question: "Что такое React?",
    answer:
      "React — это библиотека JavaScript для построения пользовательских интерфейсов, основанная на компонентах."
  },
  {
    question: "Что такое манга и аниме?",
    answer:
      "Манга — это японские комиксы, а аниме — японская анимация. Они тесно связаны и популярны во всём мире."
  },
  {
    question: "Что такое манга и аниме?",
    answer:
      "Манга — это японские комиксы, а аниме — японская анимация. Они тесно связаны и популярны во всём мире."
  }
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="faq-item">
    <div className="Questions" onClick={onToggle}>
      <div className="Questions_title">
        <h4>{question}</h4>
        <div className="Questions_toggle">
          {isOpen ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </div>
      </div>
    </div>
    {isOpen && (
      <div className="Questions_content">
        <p className="text">{answer}</p>
      </div>
    )}
  </div>
);

const QuestionsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="header">
        <h1>Manga-chan--Anime-chan: Ответы на вопросы</h1>

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

      <div className="Questions_1">
        <h1>Часто задаваемые вопросы:</h1>
      </div>

      <section className="FAQ">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </section>

      <div className="Questions_oma_1">
        <h4 className="Contacts_Questions_oma_1">
          Если вы хотите задать лично нам свои вопросы, то пишите нам лично:
        </h4>
        <Link to="/Contacts" title="Посетите наши контакты">
          Наши контакты
        </Link>
      </div>
    </div>
  );
};

export default QuestionsPage;
