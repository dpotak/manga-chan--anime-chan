import React from "react";
import { useParams , Link } from "react-router-dom";
import { Button, Card, CardContent, Typography , Avatar , CardHeader } from '@mui/material';
import { background_partijs } from "../background_for_page/background_partijs";
// import britainFlag from './foto/britain_flags.png';
// import russianFlag from './foto/russian_flag.jpg';
// import estonianflag from './foto/estonian.png';

const MangaDetailsPage = () => {
  const { title } = useParams(); // получаем название из URL

  // 📚 Список томов (пути к PDF)
  const mangaVolumes = {
    "Chainsaw Man": [
      // { name: "Том 1", file: "/manga_pdf/Chainsaw_Man_chapters/tom_1.pdf" },
      // { name: "Том 2", file: "/manga_pdf/chainsaw_volume2.pdf" },
    ],
    "Demon Slayer": [
      // { name: "Том 1", file: "/manga_pdf/demonslayer_volume1.pdf" },
      // { name: "Том 2", file: "/manga_pdf/demonslayer_volume2.pdf" },
    ],
    "Inuyasha": [
      // { name: "Том 1", file: "/manga_pdf/inuyasha_volume1.pdf" },
    ],
  };

  const volumes = mangaVolumes[decodeURIComponent(title)] || [];

  return (
   <div className="">
    <div className="">
      <h1 className=""></h1>

      <nav className="nav-bar">
        <div className="">

        </div>
      </nav>
    </div>
    
    <div style={{ padding: "20px" }}>
      <h1>{decodeURIComponent(title)}</h1>
      <Link to="/Manga_chan">
        <Button variant="outlined" color="secondary" style={{ marginBottom: "20px" }}>
          ← Назад к списку манги
        </Button>
      </Link>

      {volumes.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {volumes.map((vol, index) => (
            <a key={index} href={vol.file} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" color="primary">
                {vol.name}
              </Button>
            </a>
          ))}
        </div>
      ) : (
        <p>Томы для этой манги пока не добавлены.</p>
      )}
    </div>
   </div>
  );
};


export default MangaDetailsPage;
