import MediaSection from "../components/MediaSection";
import content from "../data/content.json";

const Home = () => {
    const movies = content.filter((item) => item.type === "movie");
    const tvShows = content.filter((item) => item.type === "tv");
  const books = content.filter((item) => item.type === "book"); 
        
  return (
    <div>
      <MediaSection
        title="Top Movies"
        items={[...movies.slice(0,5), { viewAll: true, type: "movie" }]}
        type="movie"
      />
      <MediaSection
        title="Top TV Shows"
        items={[...tvShows.slice(0,5), { viewAll: true, type: "tv" }]}
        type="tv"
      />
      <MediaSection
        title="Top Books"
        items={[...books.slice(0,5), { viewAll: true, type: "book" }]}
        type="book"
      />
    </div>
  );
};

export default Home;
