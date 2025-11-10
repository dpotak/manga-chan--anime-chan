import React from "react"; 
import { Link } from "react-router-dom";
import "./reverse_sites_folders_css/reverse.css";
import { Button, Card, CardContent, Typography , Avatar , CardHeader } from '@mui/material';
import { motion } from "framer-motion";


/// подклченные PNG файлы которые предназначены для флагов-переводов
import britainFlag from './foto/britain_flags.png';
import russianFlag from './foto/russian_flag.jpg';
import estonianflag from './foto/estonian.png';


const reverse_site = () => {
   return (
    <motion.div
      className="reverse-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="reverse-loader">
        <h2>Загрузка...</h2>
        <div className="spinner"></div>
      </div>
    </motion.div>
  );
};

export default reverse_site;
