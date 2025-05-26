#Servidor Flask

from flask import Flask, request, jsonify
from flask_cors import CORS
from pvlib_logic import get_optimal_tilt_azimuth

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "API solar backend running"

@app.route("/api/optimize", methods=["POST"])
def optimize():
    data = request.get_json()
    lat = data.get("latitude")
    lon = data.get("longitude")
    season = data.get("season", "yearly")
    result = get_optimal_tilt_azimuth(lat, lon, season)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)