// RegisterPage.jsx
import React from "react";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

import icon_register from "./icon/register_nick.png";

import "./register_folder_css/register.css";
import "./register_folder_css/particlesjs_register.css";

import Google from "./register_foto/google.png";
import GiThub from "./register_foto/gitHub.png";
import Facebook from "./register_foto/Facebook.png";
import VK from "./register_foto/VK.png";

import black_perehod from "./Perehod_whiteAndBlack/black.jpg";
import berjuzovii_perehod from "./Perehod_whiteAndBlack/ICON_perehod_2.png";

import { useTranslatorRegister } from "../hooks/Register_Translator";
import { useTransitionRegister } from "../hooks/Register_Transition";
import { background_partijs } from "../background_for_page/background_partijs";


const RegisterPage = () => {
  useEffect(() => {
      background_partijs();
    }, []);

  useTransitionRegister();
  const { t, changeLanguage } = useTranslatorRegister();

  return (
  
    <div>
       <div id="particles-js"></div>
        <div class="count-particles"> <span class="js-count-particles"></span> </div> 
      <div className="register-page">

      <nav className="nav-bar">
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

      <h1 className="page-title">Manga-chan / Anime-chan</h1>

      <div className="forms-container">

        {/* Registration Form */}
        <div className="card form-card">
          <h2> {t.Register} </h2>
          <input type="text" placeholder={t.Name} />
          <input type="text" placeholder={t.Name_2} />
          <input type="email" placeholder={t.email} />
          <input type="text" placeholder={t.telefon} />
          <input type="date" placeholder={t.date_birth} />
          
          {/* Для определение пола человека */}
          <div className="Pol_register">
            <div className="Male_reg">
              <p className="Male_p"> {t.Male_p} </p>
              <input type="checkbox"></input>
            </div> 
            <div className="Female_reg">
              <p className="Female_p"> {t.Female_p} </p>
              <input type="checkbox"></input>  
            </div>

          </div>

          <button className="btn-primary"> {t.primary_register} </button>

          <div className="Reg_Google_GitHub">
            <button className="GitHub"><img src={ GiThub } width={"30px"} height={"25px"}></img></button>
            <button className="Google"><img src={ Google } width={"30px"} height={"25px"}></img></button>
            <button className="VK"><img src={ VK } width={"30px"} height={"25px"}></img></button>
            <button className="Facebook"><img src={ Facebook } width={"30px"} height={"25px"}></img></button>

          </div>
        </div>

        {/* Sign In Form */}
        <div className="card form-card">
          <h2> {t.enter_reg} </h2>
          <input type="text" placeholder="Username или Email" />
          <input type="password" placeholder="Пароль" />
          <button className="btn-primary"> {t.primary_btn_enter} </button>

          <div className="LinK_Home">
            <Link to="/"> {t.LinK_Home} </Link>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default RegisterPage;
