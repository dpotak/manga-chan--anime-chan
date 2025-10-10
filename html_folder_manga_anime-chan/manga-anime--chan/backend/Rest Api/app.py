from flask import Flask, jsonify
import sqlite3
from flask_cors import CORS 

app = Flask(__name__)

# Простейший роут
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello, API is working!'})

if __name__ == '__main__':
    # host='0.0.0.0' чтобы был доступ извне VM/Docker
    app.run(host='0.0.0.0', port=5000, debug=True)

