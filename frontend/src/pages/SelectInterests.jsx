import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MediaCard from "../components/MediaCard";
import { Link } from "react-router-dom";
import "../styles/SelectInterests.css";

const categories = ["Movies", "TV Shows", "Books"];
const genres = [
  "Fiction",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Fantasy",
  "Action",
  "Horror",
  "Drama",
  "Adventure",
  "Comedy",
  "Thriller",
  "Crime",
  "Biography",
  "History",
];

/* const recommendationsDB = {
  "Movies:Fiction": [
    {
      title: "Inception",
      person: "Christopher Nolan",
      genre: "Fiction",
      type: "movie",
    },
    {
      title: "The Matrix",
      person: "The Wachowskis",
      genre: "Fiction",
      type: "movie",
    },
  ],
  "Movies:Action": [
    {
      title: "Mad Max: Fury Road",
      person: "George Miller",
      genre: "Action",
      type: "movie",
    },
  ],
  "Books:Mystery": [
    {
      title: "The Da Vinci Code",
      person: "Dan Brown",
      genre: "Mystery",
      type: "book",
    },
  ],
  "TV Shows:Drama": [
    {
      title: "Breaking Bad",
      person: "Vince Gilligan",
      genre: "Drama",
      type: "tv",
    },
  ],
}; */



export default function SelectInterests() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleGenreClick = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to get recommendations.");
      return;
    }

    if (selectedCategories.length !== 1) {
    alert("Please select exactly one category for recommendations.");
    return;
  }

  const categoryMap = {
    "Movies": { type: "movie", url: "https://dev2004v-content-detection-backend.hf.space/recommend/movies" },
    "TV Shows": { type: "tv", url: "https://dev2004v-content-detection-backend.hf.space/recommend/tvshowrec" },
    "Books": { type: "book", url: "https://dev2004v-content-detection-backend.hf.space/recommend/book" },
  };

  const selectedCategory = selectedCategories[0];
  const mapped = categoryMap[selectedCategory];

  if (!mapped) {
    alert("Unsupported category selected.");
    return;
  }

  try {
    const response = await fetch(mapped.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        type: mapped.type,
        genre: selectedGenres.join(","),
        top_k: 10,
      }),
    });

    const data = await response.json();

    if (response.ok && data.status === "success") {
      const formatted = data.recommendations.map((item) => ({
        title: item.name,
        person: item.creator,
        genre: item.genre,
        type: item.type,
      }));

      setRecommendations(formatted);
      setShowRecommendations(true);
    } else {
      alert(data.error || "Failed to fetch recommendations.");
    }
  } catch (err) {
    console.error("❌ Error fetching recommendations", err);
    alert("Something went wrong.");
  }
};

  return (
    <div className="interests-container">
      {!showRecommendations ? (
        <div className="interests-card">
          <h2>Select Your Interests</h2>

          <div className="section">
            <h3>What category are you interested in?</h3>
            <div className="options">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`option-btn ${
                    selectedCategories.includes(cat) ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>What genre are you interested in?</h3>
            <div className="options">
              {genres.map((genre) => (
                <button
                  type="button"
                  key={genre}
                  className={`option-btn ${
                    selectedGenres.includes(genre) ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleGenreClick(genre)
                  }
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="continue-btn"
            disabled={
              selectedCategories.length === 0 || selectedGenres.length === 0
            }
          >
            Continue
          </button>
        </div>
      ) : (
        <div className="recommendation-section">
          <h2 className="results-title"><Link to="/home" className="back-to-home">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link> Your Recommendations</h2>
          {recommendations.length > 0 ? (
            <div className="media-grid">
              {recommendations.map((item, index) => (
                <MediaCard
                  key={index}
                  title={item.title}
                  person={item.person}
                  genre={item.genre}
                  type={item.type}
                />
              ))}
            </div>
          ) : (
            <p>No recommendations found for your selection.</p>
          )}
        </div>
      )}
    </div>
  );
}
