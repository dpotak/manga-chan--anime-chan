from flask import * 
from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)
DATABASE = 'my_database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

try:
    # Подключаемся к базе
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()

    # Создаем тестовую таблицу
    cursor.execute('CREATE TABLE IF NOT EXISTS test_table (id INTEGER PRIMARY KEY, name TEXT)')
    
    # Вставляем тестовую запись
    cursor.execute('INSERT INTO test_table (name) VALUES (?)', ('TestUser',))
    conn.commit()

    # Делаем выборку данных
    cursor.execute('SELECT * FROM test_table')
    rows = cursor.fetchall()

    print("Текущие записи в базе:")
    for row in rows:
        print(row)

    print("\n✅ Соединение с базой работает, ошибки не найдено!")
    
except sqlite3.Error as e:
    print("❌ Ошибка при работе с базой:", e)

finally:
    conn.close()