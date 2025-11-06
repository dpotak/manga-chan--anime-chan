from flask import Blueprint, jsonify, request
from db import get_db_connection

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
