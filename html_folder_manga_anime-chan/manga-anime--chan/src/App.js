// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import RegisterPage from "./pages/RegisterPage";
import ForumPage from "./pages/ForumPage";
import QuestionsPage from "./pages/QuestionsPage";
import Anime_chan from "./pages/Anime_chan";
import Manga_chan from "./pages/Manga_chan";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ForumPage" element={<ForumPage />} />
          <Route path="/QuestionsPage" element={<QuestionsPage />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/Anime_chan" element={<Anime_chan />} />
          <Route path="/Manga_chan" element={<Manga_chan />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  );
}

export default App;