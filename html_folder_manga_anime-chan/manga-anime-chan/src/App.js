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
import registerPage from "./pages/registerPage";
import ForumPage from "./pages/ForumPage";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/QuestionsPage" element={<QuestionsPage />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/registerPage" element={<registerPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;