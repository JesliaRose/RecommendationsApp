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
      <MediaSection title="Top Movies" items={movies} type="movie" />
      <MediaSection title="Top TV Shows" items={tvShows} type="tv" />
      <MediaSection title="Top Books" items={books} type="book" />
    </div>
  );
};

export default Home;
