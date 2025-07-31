import MediaSection from "../components/MediaSection";
import NavBar from "../components/Navbar";
import content from "../data/content.json";

const Home = () => {
  const movies = content.filter((item) => item.type === "movie");
  const tvShows = content.filter((item) => item.type === "tv");
  const books = content.filter((item) => item.type === "book");

  return (
    <div>
      <NavBar />
      <MediaSection
        title="Top Movies"
        items={movies.slice(0, 5)}
        type="movie"
      />
      <MediaSection
        title="Top TV Shows"
        items={tvShows.slice(0, 5)}
        type="tv"
      />
      <MediaSection
        title="Top Books"
        items={books.slice(0, 5)}
        type="book"
      />
    </div>
  );
};

export default Home;
