from flask import Blueprint, jsonify, request
from db import get_db_connection
import requests
from bs4 import BeautifulSoup

news_bp = Blueprint('news', __name__)

@news_bp.route('/api/news', methods=['GET'])
def get_news():
    conn = get_db_connection()
    news = conn.execute('SELECT * FROM news').fetchall()
    conn.close()
    return jsonify([dict(row) for row in news])

@news_bp.route('/api/news', methods=['POST'])
def add_news():
    data = request.json
    title = data.get('title')
    content = data.get('content')
    conn = get_db_connection()
    conn.execute('INSERT INTO news (title, content) VALUES (?, ?)', (title, content))
    conn.commit()
    conn.close()
    return jsonify({'message': 'News added successfully!'})

# 🔥 Новый маршрут для автопарсинга новостей
@news_bp.route('/api/fetch_news', methods=['GET'])
def fetch_news():
    try:
        urls = [
            "https://www.animenewsnetwork.com/news",   # пример 1
            "https://www.crunchyroll.com/news",        # пример 2
            "https://myanimelist.net/news"             # пример 3
        ]

        all_news = []

        for url in urls:
            response = requests.get(url, timeout=10)
            if response.status_code != 200:
                continue

            soup = BeautifulSoup(response.text, "html.parser")

            # Примерная логика извлечения заголовков и ссылок
            for item in soup.select("a"):  # адаптируй под структуру сайта
                title = item.get_text(strip=True)
                link = item.get("href")
                if title and link and len(title) > 30:  # фильтр коротких текстов
                    all_news.append({
                        "title": title,
                        "link": link if link.startswith("http") else url + link
                    })

        # Сохраняем только новые новости в базу
        conn = get_db_connection()
        for news in all_news:
            existing = conn.execute("SELECT * FROM news WHERE title = ?", (news["title"],)).fetchone()
            if not existing:
                conn.execute("INSERT INTO news (title, content) VALUES (?, ?)", (news["title"], news["link"]))
        conn.commit()
        conn.close()

        return jsonify({"message": f"{len(all_news)} новостей загружено.", "news": all_news})
    except Exception as e:
        print("Ошибка при загрузке новостей:", e)
        return jsonify({"error": "Не удалось загрузить новости"}), 500
