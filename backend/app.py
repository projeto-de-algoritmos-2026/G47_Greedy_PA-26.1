from flask import Flask, request, jsonify
from flask_cors import CORS
from algorithm import minimize_lateness

app = Flask(__name__)
CORS(app)


@app.route('/optimize', methods=['POST'])
def optimize():
    data = request.get_json()
    resultado = minimize_lateness(data['entregas'])
    return jsonify(resultado)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
