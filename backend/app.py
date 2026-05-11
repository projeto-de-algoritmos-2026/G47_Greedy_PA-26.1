from flask import Flask, request, jsonify
from flask_cors import CORS
from algorithm import minimize_lateness
from metrics import calculate_metrics

app = Flask(__name__)
CORS(app)


@app.route('/optimize', methods=['POST'])
def optimize():
    data = request.get_json()
    resultado = minimize_lateness(data['entregas'])
    return jsonify(resultado)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
    
@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok"
    })

@app.route("/metrics", methods=["POST"])
def metrics():
    data = request.get_json()
    before_route = data.get("before_route", [])
    after_route = data.get("after_route", [])
    result = calculate_metrics(
        before_route,
        after_route
    )
    return jsonify(result)
if __name__ == "__main__":
    
    app.run(debug=True)
