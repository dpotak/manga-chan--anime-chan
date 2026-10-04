
# 🚀 Full-Stack Development Projects

# 📌 Project Description
## 🧨 Manga-Chan--Anime-Chan
💥 Is a project that perfectly combines reading manga and watching anime. It allows users to enjoy content easily, discuss their favorite series, and stay up to date with industry news.
You can read manga and watch anime in three languages: ENG , EST and RUS.

## 💻📚 Skills acquired during the project:
- Writing HTML and working with CSS styles.
- Python (Flask) programming for API creation.
- Working with Git versions. Restoring old code versions and actively pushing code.
- Working with JavaScript (React). Writing code for multilingual pages, writing additional features to improve page performance.
- Setting up infrastructure on Linux Ubuntu and CentOS 7.
 -- Configuring and using Ansible.
 -- Automatic Docker configuration.
 -- Automatic configuration using Ansible with Docker: Apache2 and MongoDB.

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
+-------------+          +--------------------+          +-------------+
| Server      |          | Linux Server       |          |             |
|  Ansible    +---------> (Apache2 ,          +--------->  WebSite App |
|             |          | Docker Container)  |          |             |
+-------------+          +--------------------+          +-------------+
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

## Download the progects
## Open the Visual Studio Code

## Go to the project repository.
```bash
..\anime-chan--manga-chan\manga-chan--anime-chan\manga-anime--chan
```

## Then enter the command:
```bash
npm start
```


