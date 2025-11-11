import React from "react"; 
import { Link } from "react-router-dom";
import "./error_folders_css/error.css";
import { Button, Typography } from '@mui/material';

/// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';

const Error = () => {
    return (
    <div className="error-container">
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
