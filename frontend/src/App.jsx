import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp.jsx";
import SelectInterests from "./pages/SelectInterests.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/Home.jsx";
import content from "./data/content.json";
import AllMovies from "./components/AllMovies.jsx";
import AllTvShows from "./components/AllTvShows.jsx";
import AllBooks from "./components/AllBooks.jsx";
import Dashboard from "./pages/dashboard.jsx";
import ManageProfiles from "./pages/ManageProfiles.jsx";
import "./App.css";

function App() {
  const movies = content.filter((item) => item.type === "movie");
  const tvShows = content.filter((item) => item.type === "tv");
  const books = content.filter((item) => item.type === "book");


  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
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
      <Route path="/profile" element = {<ManageProfiles />} />
    </Routes>
  );
}

export default App;
