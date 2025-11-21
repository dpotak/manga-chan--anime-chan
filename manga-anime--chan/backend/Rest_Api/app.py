from flask import Flask
from flask_cors import CORS
from config import Config
from routes.news_routes import news_bp, load_news_from_sites
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

app.register_blueprint(news_bp)

# 🔄 Планировщик автопарсинга
scheduler = BackgroundScheduler()
scheduler.add_job(load_news_from_sites, 'interval', hours=12)  # каждые 12 часов
scheduler.start()

@app.route('/api/hello')
def hello():
    return {'message': 'Hello, API is working!'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
