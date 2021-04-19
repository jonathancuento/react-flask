from flask import Flask
from flask import jsonify
import json

app = Flask(__name__)
x = [
    {'id':1, "nombre":"Pan", "precio":"12.25", "ingredientes":"Levadura, sal, harina"},
    {'id':2, "nombre":"Pizza", "precio":"10.00", "ingredientes":"Jamon, harina, verduras"},
    {'id':3, "nombre":"Jugo", "precio":"08.10", "ingredientes":"Agua, piña, coco"},
    {'id':4, "nombre":"Empanada", "precio":"09.10", "ingredientes":"Harina, queso, aceite"}
];
y = json.dumps(x)

@app.route('/api', methods=['GET'])
def index():
    return y

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')