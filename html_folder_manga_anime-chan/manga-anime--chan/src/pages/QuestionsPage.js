import React, { useState } from "react";
import { Link } from "react-router-dom";
import britainFlag from "./foto/britain_flags.png";
import russianFlag from "./foto/russian_flag.jpg";
import estonianflag from './foto/estonian.png';
import "./otvetinavoprosi_folder_css/otvetinavoprosi.css";
import "./otvetinavoprosi_folder_css/otvetinavoprosi_2.css";

const faqData = [
  { question: "Что такое “Manga-chan / Anime-chan?", 
    answer: "HTML — это язык гипертекстовой разметки, используемый для создания структуры веб-страниц." 
  },
  { question: "Зачем вы создали этот проект?", 
    answer: "CSS — это каскадные таблицы стилей, отвечающие за внешний вид и оформление элементов HTML." 
  },
  { question: "Кто стоит за проектом?", 
    answer: "React — это библиотека JavaScript для построения пользовательских интерфейсов, основанная на компонентах." 
  }
];

const FAQ_1 = [
  { question: "Можно ли читать мангу или смотреть аниме прямо на сайте?", answer: "hhhh — это язык гипертекстовой разметки, используемый для создания структуры веб-страниц." },
  { question: "Как часто обновляется контент?", answer: "CSS — это каскадные таблицы стилей, отвечающие за внешний вид и оформление элементов HTML." },
  { question: "Где можно узнать о выходе новых глав/эпизодов?", answer: "React — это библиотека JavaScript для построения пользовательских интерфейсов, основанная на компонентах." },
  { question: "Будет ли мобильное приложение или Telegram-бот?", answer: "Манга — это японские комиксы, а аниме — японская анимация. Они тесно связаны и популярны во всём мире." },
  { question: "Как работает система комментариев или форума?", answer: "Манга — это японские комиксы, а аниме — японская анимация. Они тесно связаны и популярны во всём мире." }
];

const FAQ_2 = [
  { question: "Как можно поддержать проект?", answer: "HTML — это язык гипертекстовой разметки, используемый для создания структуры веб-страниц." },
  { question: "Зачем проекту нужны донаты?", answer: "CSS — это каскадные таблицы стилей, отвечающие за внешний вид и оформление элементов HTML." },
  { question: "Есть ли бонусы для подписчиков Boosty?", answer: "React — это библиотека JavaScript для построения пользовательских интерфейсов, основанная на компонентах." }
];

const FAQ_3 = [
  { question: "Откуда вы берете новости о манге и аниме?", answer: "HTML — это язык гипертекстовой разметки, используемый для создания структуры веб-страниц." },
  { question: "Можно ли предложить новость или материал?", answer: "CSS — это каскадные таблицы стилей, отвечающие за внешний вид и оформление элементов HTML." }
];

const FAQ_4 = [
  { question: "Как связаться с командой проекта?", answer: "HTML — это язык гипертекстовой разметки, используемый для создания структуры веб-страниц." },
  { question: "Можно ли стать частью команды (редактором, дизайнером, переводчиком)?", answer: "CSS — это каскадные таблицы стилей, отвечающие за внешний вид и оформление элементов HTML." }
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="faq-item">
    <div className="Questions" onClick={onToggle}>
      <div className="Questions_title">
        <h4>{question}</h4>
        <div className="Questions_toggle">{isOpen ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}</div>
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
  // отдельное состояние для каждой секции FAQ
  const [openIndexFaq, setOpenIndexFaq] = useState(null);
  const [openIndexFunc, setOpenIndexFunc] = useState(null);
  const [openIndexDon, setOpenIndexDon] = useState(null);
  const [openIndexNews, setOpenIndexNews] = useState(null);
  const [openIndexContact, setOpenIndexContact] = useState(null);

  const handleToggle = (index, setOpen) => {
    setOpen(prev => (prev === index ? null : index));
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
            <button className="ENG"><img src={britainFlag} width="20" height="20" alt="EN" /></button>
            <button className="rus"><img src={russianFlag} width="20" height="20" alt="RU" /></button>
            <button className="EST"><img src={estonianflag} width="20" height="20" alt="EST" /></button>
          </div>
        </nav>
      </div>

      <div className="Questions_1">
        <h1>Часто задаваемые вопросы:</h1>
      </div>

      <div className="Questions_Projects_1">
        <h2>Основные вопросы о проекте:</h2>
      </div>
      <section className="FAQ">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndexFaq === index}
            onToggle={() => handleToggle(index, setOpenIndexFaq)}
          />
        ))}
      </section>

      <div className="Questions_Projects_2"><h2>О функционале сайта:</h2></div>
      <section className="FAQ">
        {FAQ_1.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndexFunc === index}
            onToggle={() => handleToggle(index, setOpenIndexFunc)}
          />
        ))}
      </section>

      <div className="Questions_Projects_3"><h2>Поддержка проекта / донаты:</h2></div>
      <section className="FAQ">
        {FAQ_2.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndexDon === index}
            onToggle={() => handleToggle(index, setOpenIndexDon)}
          />
        ))}
      </section>

      <div className="Questions_Projects_4"><h2>Новости и обновления:</h2></div>
      <section className="FAQ">
        {FAQ_3.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndexNews === index}
            onToggle={() => handleToggle(index, setOpenIndexNews)}
          />
        ))}
      </section>

      <div className="Questions_Projects_5"><h2>Связь с администрацией:</h2></div>
      <section className="FAQ">
        {FAQ_4.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndexContact === index}
            onToggle={() => handleToggle(index, setOpenIndexContact)}
          />
        ))}
      </section>

      <div className="Questions_oma_1">
        <h4 className="Contacts_Questions_oma_1">
          Если вы хотите задать лично нам свои вопросы, то пишите нам лично:
        </h4>
        <Link to="/Contacts" title="Посетите наши контакты">Наши контакты</Link>
      </div>
    </div>
  );
};

export default QuestionsPage;
