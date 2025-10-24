import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const AnimeDetailsPage = () => {
  const { title } = useParams();
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // 🎥 Список серий
  const animeEpisodes = {
    "Chainsaw Man": [
      { name: "Серия 1", file: "/anime_video/Chainsaw_Man/episode1.mp4" },
      { name: "Серия 2", file: "/anime_video/Chainsaw_Man/episode2.mp4" },
    ],
    "Demon Slayer": [
      { name: "Серия 1", file: "/anime_video/Demon_Slayer/episode1.mp4" },
      { name: "Серия 2", file: "/anime_video/Demon_Slayer/episode2.mp4" },
    ],
    "Inuyasha": [
      { name: "Серия 1", file: "/anime_video/Inuyasha/episode1.mp4" },
    ],
    "One Piece": [
      { name: "Серия 1", file: "" },
      { name: "Серия 2", file: "" },
      { name: "Серия 3", file: "" },
      { name: "Серия 4", file: "" },
    ],
    "Kusuriya no Hitorigoto": [ // 2 season
      {name: "Серия 2 - 2 сеазон", file: "https://www.dropbox.com/scl/fi/04zfn3cd02y9loxauis8i/2_seria.mp4?rlkey=ojedxvwoj6t06ckiiq9wpd5nj&raw=1"},
    ],
  };

  const episodes = animeEpisodes[decodeURIComponent(title)] || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{decodeURIComponent(title)}</h1>
      <Link to="/Anime_chan">
        <Button variant="outlined" color="secondary" style={{ marginBottom: "20px" }}>
          ← Назад к списку аниме
        </Button>
      </Link>

      {episodes.length > 0 ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {episodes.map((ep, index) => (
              <Button
                key={index}
                variant={selectedEpisode === ep ? "contained" : "outlined"}
                color="primary"
                onClick={() => setSelectedEpisode(ep)}
              >
                {ep.name}
              </Button>
            ))}
          </div>

          {selectedEpisode && (
            <div style={{ marginTop: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {selectedEpisode.name}
              </Typography>
              <video
                key={selectedEpisode.file}
                controls
                width="100%"
                style={{ borderRadius: "10px" }}
              >
                <source src={selectedEpisode.file} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          )}
        </>
      ) : (
        <p>Серии для этого аниме пока не добавлены.</p>
      )}
    </div>
  );
};

export default AnimeDetailsPage;
