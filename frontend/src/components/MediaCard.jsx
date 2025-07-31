import React, { useEffect, useState } from "react";
import { fetchTMDBPoster, fetchBookCover } from "../utils/fetchPoster";
import "../styles/MediaCard.css";

const MediaCard = ({ title, person, genre, description, posterUrl, type }) => {
  const [poster, setPoster] = useState(posterUrl || "");
  const [rating, setRating] = useState("N/A");
  const [creator, setCreator] = useState(person);
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    const fetchData = async () => {
      if (!posterUrl) {
        console.log("Searching TMDB for:", title);
        if (type === "movie" || type === "tv") {
          const { posterUrl, rating, description, creator } =
            await fetchTMDBPoster(title, type);
          setPoster(posterUrl);
          setRating(rating);
          setDesc(description);
          setCreator(creator);
        } else if (type === "book") {
          console.log("Book Info:", { title, person, type });
          const { posterUrl, rating } = await fetchBookCover(title, person);
          setPoster(posterUrl);
          setRating(rating);
        }
      }
    };

    fetchData();
  }, [title, person, type, posterUrl]);

  return (
    <div className="media-card">
      {poster ? (
        <img src={poster} alt={title} className="media-poster" />
      ) : (
        <div className="media-placeholder">Loading...</div>
      )}

      <div className="media-details">
        <h3 className="media-title">{title}</h3>
        <p className="media-person">
          {type === "book" ? "Author" : "Director"}: <span>{creator}</span>
        </p>
        <p className="media-description">{desc}</p>
        <div className="media-info-row">
          <p className="media-rating">Rating: {rating}</p>
          <p className="media-genre">{genre}</p>
        </div>
        <button className="btn-watchlist">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MediaCard;
