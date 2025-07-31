from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load saved model components
model = joblib.load("models/tvshow_model.pkl")
vectorizer = joblib.load("models/vectorizer.pkl")
label_encoder = joblib.load("models/label_encoder.pkl")

@app.route("/")
def home():
    return "Welcome to the TV Show Recommendation API"

@app.route("/tvrec", methods=["POST"])
def recommend_tv_shows():
    data = request.get_json()
    genre_input = data.get("genre")

    if not genre_input:
        return jsonify({"error": "Genre not provided"}), 400

    vec = vectorizer.transform([genre_input])
    pred = model.predict(vec)
    show_string = label_encoder.inverse_transform(pred)[0]
    show_list = [s.strip() for s in show_string.split(',')]

    return jsonify({
        "genre": genre_input,
        "recommendations": show_list[:10]  # limit to top 10 shows
    })

if __name__ == "__main__":
    app.run(debug=True)
