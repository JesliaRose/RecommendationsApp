import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectInterests.css';

const categories = ["Movies", "TV Shows", "Books"];
const genres = [
  "Fiction", "Mystery", "Romance", "Sci-Fi", "Fantasy",
  "Horror", "Adventure", "Comedy", "Biography", "History"
];

export default function SelectInterests() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const toggleSelection = (item, setSelected, selected) => {
    setSelected(
      selected.includes(item)
        ? selected.filter(i => i !== item)
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
    navigate("/home");
  };

  return (
    <div className="interests-container">
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
                  toggleSelection(cat, setSelectedCategories, selectedCategories)
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
          disabled={selectedCategories.length === 0 || selectedGenres.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
