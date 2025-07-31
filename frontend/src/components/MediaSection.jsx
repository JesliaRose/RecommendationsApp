import { Link } from "react-router-dom";
import MediaCard from "./MediaCard";
import "../styles/MediaSection.css";

const MediaSection = ({ title, items, type }) => {
  const pathMap = {
    movie: "/movies",
    tv: "/tvshows",
    book: "/books"
  };

  return (
    <section className="media-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <Link to={pathMap[type]} className="view-all-link">
          View All →
        </Link>
      </div>

      <div className="media-scroll-container">
        {items.slice(0, 5).map((item, index) => (
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

export default MediaSection;
