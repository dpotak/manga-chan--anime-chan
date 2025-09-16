import React from "react";
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import "./register_folder_css/register.css"; // подключение CSS

const RegisterPage = () => {
  return (
    <div className="register-page">

      <h1 className="h1_glav">Manga-chan--Anime-chan</h1>

      <nav className="nav-bar">
        <div className="language">
          <button>
              <img src={britainFlag} width="20" height="20" alt="EN" />
            </button>
            <button className="rus">
              <img src={russianFlag} width="20" height="20" alt="RU" />
            </button>
          </div>
        </nav>

      <div className="kvadrat_register">
        <div className="forms_enter">
          <h1>Зарегистрироваться</h1>
          <input type="text" placeholder="First Name" className="forms_enter_1" />
          <input type="text" placeholder="Last Name" className="forms_enter_2" />
          <input type="email" placeholder="gmail or email" className="forms_enter_3" />
          <input type="text" placeholder="telefon number" className="forms_enter_4" />
          <input type="date" placeholder="Дата рождение" className="forms_enter_5" />
        </div>
        <div className="btn_register">
          <button className="btn_1_reg">Регистрация</button>
        </div>
      </div>

      <div className="kvadrat_SignIn">
        <div className="forms_enter_SignIn">
          <h1 className="h1_Welcome">Добро пожаловать обратно!</h1>
          <h2 className="h2_SignIn">Войти</h2>
          <input type="text" placeholder="username or gmail" />
          <input type="text" placeholder="password" />
        </div>
        <div className="btn_SignIn">
          <button className="btn_1_SignIn">Войти</button>
        </div>
      </div>

      {/* Для смены языка через JS, лучше перенести логику в отдельный React компонент */}
      {/* <img src={britainFlag} alt="EN" /> */}
      {/* <img src={russianFlag} alt="RU" /> */}

    </div>
  );
};

export default RegisterPage;
