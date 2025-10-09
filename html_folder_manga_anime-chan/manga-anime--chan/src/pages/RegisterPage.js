// RegisterPage.jsx
import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';
import "./register_folder_css/register.css";
import Google from "./register_foto/google.png";
import GiThub from "./register_foto/gitHub.png";
import { Link } from "react-router-dom";
import { useTranslatorRegister } from "../hooks/Register_Translator";
import { useTransitionRegister } from "../hooks/Register_Transition";


const RegisterPage = () => {
  useTransitionRegister();

  return (
    <div className="register-page">

      <nav className="nav-bar">
        <div className="language">
          <button className="ENG">
              <img src={britainFlag} width="24" height="24" alt="EN" />
          </button>
          <button className="rus">
              <img src={russianFlag} width="24" height="24" alt="RU" />
          </button>
          <button className="EST">
              <img src={estonianflag} width="24" height="24" alt="EST" />
          </button>
        </div>
      </nav>

      <h1 className="page-title">Manga-chan / Anime-chan</h1>

      <div className="forms-container">

        {/* Registration Form */}
        <div className="card form-card">
          <h2>Зарегистрироваться</h2>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Телефон" />
          <input type="date" placeholder="Дата рождения" />
          
          {/* Для определение пола человека */}
          <div className="Pol_register">
            <div className="Male_reg">
              <p className="Male_p">Мужской</p>
              <input type="checkbox"></input>
            </div> 
            <div className="Female_reg">
              <p className="Female_p">Женский</p>
              <input type="checkbox"></input>  
            </div>

          </div>

          <button className="btn-primary">Регистрация</button>

          <div className="Reg_Google_GitHub">
            <button className="GitHub"><img src={ GiThub } width={"30px"} height={"25px"}></img></button>
            <button className="Google"><img src={ Google } width={"30px"} height={"25px"}></img></button>
          </div>
        </div>

        {/* Sign In Form */}
        <div className="card form-card">
          <h2>Добро пожаловать обратно!</h2>
          <input type="text" placeholder="Username или Email" />
          <input type="password" placeholder="Пароль" />
          <button className="btn-primary">Войти</button>

          <div className="LinK_Home">
            <Link to="/">Вернуться на главную</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
