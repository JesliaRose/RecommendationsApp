import { Route, Routes } from "react-router-dom";
import SelectInterests from "./pages/SelectInterests.jsx";
import Home from "./pages/Home.jsx";
import content from "./data/content.json";
import AllMovies from "./components/AllMovies.jsx";
import AllTvShows from "./components/AllTvShows.jsx";
import AllBooks from "./components/AllBooks.jsx";
import Dashboard from "./pages/dashboard.jsx";
import "./App.css";

function App() {
  const movies = content.filter((item) => item.type === "movie");
  const tvShows = content.filter((item) => item.type === "tv");
  const books = content.filter((item) => item.type === "book");


  return (
    <Routes>
      <Route path="/" element={<div>Landing Page</div>} />
      <Route path="/interests" element={<SelectInterests />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/movies"
        element={<AllMovies items={movies} type="movie" />}
      />
      <Route
        path="/tvshows"
        element={<AllTvShows items={tvShows} type="tv" />}
      />
      <Route
        path="/books"
        element={<AllBooks items={books} type="book" />}
      />
    </Routes>
  );
}

export default App;
