from flask import Flask
from flask_cors import CORS
from config import Config
from routes.news_routes import news_bp

from apscheduler.schedulers.background import BackgroundScheduler
from routes.news_routes import fetch_news

scheduler = BackgroundScheduler()
scheduler.add_job(lambda: fetch_news(), 'interval', hours=12)  # каждые 12 часов
scheduler.start()

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

app.register_blueprint(news_bp)

@app.route('/api/hello')
def hello():
    return {'message': 'Hello, API is working!'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
