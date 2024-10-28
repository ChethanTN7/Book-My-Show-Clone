import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import { Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/Home.Page";
import PlayPage from "./pages/Play.Page";
import MoviePage from "./pages/Movie.Page";
import SearchPage from "./pages/Search.Page";
import CastPage from "./pages/Cast.Page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
      <Route path="/search/:info" element={<SearchPage />} />
      <Route path="/cast/:id" element={<CastPage />} />
    </Routes>
  );
}

export default App;
