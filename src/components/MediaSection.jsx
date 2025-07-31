import MediaCard from "./MediaCard";
import "../styles/MediaSection.css";

const MediaSection = ({ title, items, type }) => {
  return (
    <section className="media-section">
      <h2 className="section-title">{title}</h2>
      <div className="media-scroll-container">
        {items.map((item, index) => {
          if (item.viewAll) {
            return (
              <div className="view-all-card" key={`viewall-${index}`}>
                <p>View All</p>
              </div>
            );
          }

          return (
            <MediaCard
              key={index}
              title={item.name}
              person={item.creator}
              genre={item.genre}
              description={item.description}
              posterUrl={item.posterUrl}
              type={type}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MediaSection;
