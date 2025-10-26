
// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import RegisterPage from "./pages/RegisterPage";
import ForumPage from "./pages/ForumPage";
import QuestionsPage from "./pages/QuestionsPage";
import Anime_chan from "./pages/Anime_chan";
import Manga_chan from "./pages/Manga_chan";
import Contacts from "./pages/Contacts";
import AnimeDetailsPage from "./pages/AnimeDetailsPage";
import MangaDetailsPage from "./pages/MangaDetailsPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/ForumPage" element={<PageWrapper><ForumPage /></PageWrapper>} />
        <Route path="/QuestionsPage" element={<PageWrapper><QuestionsPage /></PageWrapper>} />
        <Route path="/NewsPage" element={<PageWrapper><NewsPage /></PageWrapper>} />
        <Route path="/RegisterPage" element={<PageWrapper><RegisterPage /></PageWrapper>} />
        <Route path="/Anime_chan" element={<PageWrapper><Anime_chan /></PageWrapper>} />
        <Route path="/Manga_chan" element={<PageWrapper><Manga_chan /></PageWrapper>} />
        <Route path="/Contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
        <Route path="/AnimeDetailsPage/:title" element={<PageWrapper><AnimeDetailsPage /></PageWrapper>} />
        <Route path="/Manga/:title" element={<PageWrapper><MangaDetailsPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// Обертка для анимации каждой страницы
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    style={{ position: "relative" }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <main>
      <AnimatedRoutes />
    </main>
  );
}

export default App;
