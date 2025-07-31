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

const recommendationsDB = {
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
};

export default function SelectInterests() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const toggleSelection = (item, setSelected, selected) => {
    setSelected(
      selected.includes(item)
        ? selected.filter((i) => i !== item)
        : [...selected, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      categories: selectedCategories,
      genres: selectedGenres,
    };

    console.log("Selected:", data);
    localStorage.setItem("userPreferences", JSON.stringify(data));

    const collected = [];

    selectedCategories.forEach((cat) => {
      selectedGenres.forEach((genre) => {
        const key = `${cat}:${genre}`;
        if (recommendationsDB[key]) {
          collected.push(...recommendationsDB[key]);
        }
      });
    });

    setRecommendations(collected);
    setShowRecommendations(true);

    const handleBack = () => {
      setShowRecommendations(false);
      setRecommendations([]);
    };
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
                    toggleSelection(
                      cat,
                      setSelectedCategories,
                      selectedCategories
                    )
                  }
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
                    toggleSelection(genre, setSelectedGenres, selectedGenres)
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
