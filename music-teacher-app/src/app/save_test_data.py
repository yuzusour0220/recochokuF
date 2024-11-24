from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import sqlite3
import json

app = Flask(__name__)
CORS(app)  # CORS対応

# ルートエンドポイント
@app.route('/')
def home():
    return "Flask API is running. Use /save endpoint to save data."

# データ保存エンドポイント
@app.route('/save', methods=['POST'])
def save_data():
    try:
        # クライアントから送信されたJSONデータを取得
        data = request.json
        instrument = data.get('instrument', '未指定')
        goal = data.get('goal', '未指定')
        level = data.get('level', 1)
        genre = data.get('genre', '未指定')
        time = data.get('time', '未指定')

        # SQLiteデータベース接続と保存
        conn = sqlite3.connect('database.db')  # 'database.db' は同じディレクトリに作成されます
        cursor = conn.cursor()

        # テーブルが存在しない場合は作成（timeフィールドを追加）
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS test_data (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                instrument TEXT,
                goal TEXT,
                level INTEGER,
                genre TEXT,
                time TEXT
            )
        ''')

        # データを挿入（timeフィールドを追加）
        cursor.execute('''
            INSERT INTO test_data (instrument, goal, level, genre, time)
            VALUES (?, ?, ?, ?, ?)
        ''', (instrument, goal, level, genre, time))

        conn.commit()
        return jsonify({"message": "Data saved successfully"}), 200

    except Exception as e:
        return jsonify({"message": "Error saving data", "error": str(e)}), 500

    finally:
        conn.close()

# データ取得エンドポイント
@app.route('/get_data', methods=['GET'])
def get_data():
    try:
        # SQLiteデータベース接続
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()

        # データを取得
        cursor.execute("SELECT * FROM test_data")
        rows = cursor.fetchall()

        # カラム名を取得
        column_names = [description[0] for description in cursor.description]

        # データを辞書形式に変換
        data = [dict(zip(column_names, row)) for row in rows]

        # JSONレスポンスを返す（ensure_ascii=False）
        response = Response(
            json.dumps(data, ensure_ascii=False),
            mimetype='application/json; charset=utf-8'
        )
        return response, 200

    except Exception as e:
        return jsonify({"message": "Error retrieving data", "error": str(e)}), 500

    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)  # Flaskアプリをデバッグモードで起動
