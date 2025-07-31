import MediaCard from "./MediaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/AllMovies.css";

const AllBooks = ({ items, type }) => {

  return (
    <section className="allmovies-section">
      <h2><Link to="/home" className="back-to-home">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>All Books</h2>
      <div className="movies-scroll-container">
        {items.map((item, index) => (
          <MediaCard
            key={index}
            title={item.name}
            person={item.creator}
            genre={item.genre}
            description={item.description}
            posterUrl={item.posterUrl}
            type={type}
          />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
