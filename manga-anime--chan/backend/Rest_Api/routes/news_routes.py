from flask import Blueprint, jsonify
from db import get_db_connection
import requests
from bs4 import BeautifulSoup

news_bp = Blueprint('news', __name__)

@news_bp.route('/api/news', methods=['GET'])
def get_news():
    return jsonify([
        {"title": "Первая новость", "content": "Содержимое первой новости"},
        {"title": "Вторая новость", "content": "Описание второй новости"}
    ])

def load_news_from_sites():
    """Эта функция просто парсит и сохраняет новости — без Flask контекста"""
    urls = [
        "https://www.animenewsnetwork.com/news",
        "https://myanimelist.net/news",
    ]

    all_news = []
    for url in urls:
        response = requests.get(url, timeout=10)
        if response.status_code != 200:
            continue

        soup = BeautifulSoup(response.text, "html.parser")

        for item in soup.select("a"):
            title = item.get_text(strip=True)
            link = item.get("href")
            if title and link and len(title) > 30:
                all_news.append({
                    "title": title,
                    "link": link if link.startswith("http") else url + link
                })

    conn = get_db_connection()
    for news in all_news:
        existing = conn.execute("SELECT * FROM news WHERE title = ?", (news["title"],)).fetchone()
        if not existing:
            conn.execute("INSERT INTO news (title, content) VALUES (?, ?)", (news["title"], news["link"]))
    conn.commit()
    conn.close()

    return all_news


@news_bp.route('/api/fetch_news', methods=['GET'])
def fetch_news():
    """Этот маршрут просто вызывает ту же функцию, но через HTTP"""
    try:
        news = load_news_from_sites()
        return jsonify({"message": f"{len(news)} новостей обновлено.", "news": news})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
