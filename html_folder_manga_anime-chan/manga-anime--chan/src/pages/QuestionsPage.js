import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from "./foto/britain_flags.png";
import russianFlag from "./foto/russian_flag.jpg";
import estonianflag from './foto/estonian.png';
import icon_glavnaja from "./icon/ICON_Anime_Manga_Chan.png";

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

// подключенные файлы CSS 
import "./otvetinavoprosi_folder_css/otvetinavoprosi.css";
import "./otvetinavoprosi_folder_css/otvetinavoprosi_2.css";
import "./otvetinavoprosi_folder_css/particlesjs_Questions.css";
import "./otvetinavoprosi_folder_css/ontvetinavoprosi_webFormsSite.css";

// подключенные модули и другие файлы JS
import { UseQuestionsPages_Transition } from "../hooks/QuestionsPages_Transition";
import { useQuestionsPageTranslator } from "../hooks/QuestionsPages_Translator";
import { background_partijs } from "../background_for_page/background_partijs";



const QuestionsPage = () => {
  useEffect(() => {
      background_partijs();
    }, []);

  UseQuestionsPages_Transition();
  const { t, changeLanguage } = useQuestionsPageTranslator();

  // отдельное состояние для каждой секции FAQ
  const [openIndexFaq, setOpenIndexFaq] = useState(null);
  const [openIndexFunc, setOpenIndexFunc] = useState(null);
  const [openIndexDon, setOpenIndexDon] = useState(null);
  const [openIndexNews, setOpenIndexNews] = useState(null);
  const [openIndexContact, setOpenIndexContact] = useState(null);

  const handleToggle = (index, setOpen) => {
    setOpen(prev => (prev === index ? null : index));

  };

  const faqData = [ 
  { question: t.faqData_1, 
    answer: t.faqData_1_answer, 
  },
  { question: t.faqData_2, 
    answer: t.faqData_2_answer ,
  },
  { question: t.faqData_3 , 
    answer: t.faqData_3_answer ,
  }
];

const FAQ_1 = [ 
  { question: t.FAQ_1_1 ,  
    answer: t.FAQ_1_1_answer , 
  }, 

  { question: t.FAQ_1_2 , 
    answer: t.FAQ_1_2_answer , 
  },

  { question: t.FAQ_1_3 , 
    answer: t.FAQ_1_3_answer , 
  },

  { question: t.FAQ_1_4 , 
    answer: t.FAQ_1_4_answer ,
  },

];

const FAQ_2 = [ 
  { question: t.FAQ_2_1 , 
    answer: t.FAQ_2_1_answer },

  { question: t.FAQ_2_2 , 
    answer: t.FAQ_2_2_answer, 
  },

  { question: t.FAQ_2_3 ,  // Сделано
    answer: t.FAQ_2_3_answer ,
  }
];

const FAQ_3 = [ 
  { question: t.FAQ_3_1 , 
    answer: t.FAQ_3_1_answer, 
  },

  { question: t.FAQ_3_2 ,
    answer: t.FAQ_3_2_answer, 
  }
];

const FAQ_4 = [ 
  { question: t.FAQ_4_1 , 
    answer: t.FAQ_4_1_answer, 
  },

  { question: t.FAQ_4_2 , // Сделано
    answer: t.FAQ_4_2_answer, 
  }
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

  return (
    <div>
      <div className="header">

        <div className="glavnaja_icon_TEXT">
          <Link to={"/"}><img className="glavnaja_icon" src={icon_glavnaja} width={"65px"} height={"65px"}></img></Link>
          <h1 className="Glavnaja_1"> Manga-chan--Anime-chan  {t.h1_News}</h1>
        </div>

        <nav className="nav-bar">
          <div className="dropdown">
             <button className="dropbtn">{t.catalog}</button>
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

      {/* Черный-голубой фон (body) */}
      <div className="white_black_page">
        <button className="white_btn"></button>
        <button className="black_btn"></button>
      </div>

      <div id="particles-js"></div>
      <div class="count-particles"> <span class="js-count-particles"></span> </div>

      <div className="Questions_1">
        <h1> {t.Questions_1} </h1>
      </div>

      <div className="Questions_Projects_1">
        <h2> {t.Questions_Projects_1} </h2>
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

      <div className="Questions_Projects_2"><h2> {t.Questions_Projects_2} </h2></div>
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

      <div className="Questions_Projects_3"><h2> {t.Questions_Projects_3} </h2></div>
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

      <div className="Questions_Projects_4"><h2> {t.Questions_Projects_4} </h2></div>
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

      <div className="Questions_Projects_5"><h2> {t.Questions_Projects_5} </h2></div>
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
          {t.Contacts_Questions_oma_1}
        </h4>
        <Link to="/Contacts" title="Посетите наши контакты"> {t.Link_contacts} </Link>
      </div>

      <div id="particles-js"></div>
      <div class="count-particles"> <span class="js-count-particles"></span> </div>

    </div>
  );
};

export default QuestionsPage;
