import React from "react"; 
import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material';

import "./error_folders_css/error.css";

/// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

const Error = () => {
    return (
      
    <div className="error-container">

      <div className="languages_error">
        <button className="RUS"><img alt="RU" src={russianFlag} width="20px" height="20px" /></button>
        <button className="EST" ><img alt="EST" src={estonianflag} width="20px" height="20px" /></button>
        <button className="ENG" ><img alt="ENG" src={britainFlag} width="20px" height="20px" /></button>
      </div>

      <h1 className="error-title">ERROR 404 - Page not Found</h1>
      <p className="error-text">
        Oops!!
      </p>

      <Link to="/">
        <Button variant="contained" color="primary" className="error-button">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Error;
