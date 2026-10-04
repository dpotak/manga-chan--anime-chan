
# 🚀 Full-Stack Development Projects

# 📌 Project Description
## 🧨 Manga-Chan--Anime-Chan
💥 Is a project that perfectly combines reading manga and watching anime. It allows users to enjoy content easily, discuss their favorite series, and stay up to date with industry news.
You can read manga and watch anime in three languages: ENG , EST and RUS.

## 💻📚 Skills acquired during the project:
- Install and settings React. Writing and working with CSS styles.
- Python (Flask) programming for API creation.
- Working with Git versions. Restoring old code versions and actively pushing code.
- Working with JavaScript (React). Writing code for multilingual pages, writing additional features to improve page performance.
- Setting up infrastructure on Linux Ubuntu 22.04
 - Configuration Apache2 and MongoDB.

# ⚙️ Technologies Used
- Python (Flask)
- Ansible
- Docker (Docker Compose)
- React (Material UI and Particles.js)
- HTML , CSS 
- WSL
- MongoDB
- Git
- Apache2

# 🧱 Architecture
```bash
+-------------+          +--------------------+   
| MongoDB     |          |                    |       
  Apache2,    +---------->    WebSite App     |
| Flask API   |          |                    |
+-------------+          +--------------------+
```

✔ The Ansible server contains YAML code that automatically installs and configures all necessary components: Docker, MongoDB, Apache2.

✔ The second Linux already has the components installed and configured.


# 📂 Project Structure

```bash

manga-anime--chan/
├── backend/
├── node_modules/
├── public/
├── src/
│   ├── background_for_page/
│   ├── font/
│   ├── hooks/
│   ├── language_pages_for_DetailsSites/
│   ├── pages/
│       ├───── 
│       ├───── HomePage.js
│       ├───── NewsPage.js
│       " jn... "
│
│   ├── translations/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitattributes
├── .gitignore
├── package-lock.json
└── package.json

```

# 🚀 How to Run the Project

## Go to clone the project repository Visual Code.
```bash
..git clone https://github.com/dpotak/manga-chan--anime-chan.git
```

## Enter the repository mkdir
```bash
cd 
```

## And then enter the command:
```bash
npm start
```


