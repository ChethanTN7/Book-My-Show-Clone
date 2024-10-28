import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieLayoutHoc from "../layouts/Movie.Layout";

const Search = () => {
  const navigate = useNavigate();

  const { info } = useParams();

  const [movies, setMovies] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
  }, [movies]);

  useEffect(() => {
    const requestMovies = async () => {
      const getMovies = await axios.get(`/search/movie?query=${info}`);
      setMovies(getMovies.data.results);
      setLength(getMovies.data.results.length);
    };
    requestMovies();
  }, [info]);

  useEffect(() => {
    if (length === 1) navigate(`/movie/${movies.map((movie) => movie.id)}`);
  }, [navigate, length]);

  return (
    <>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Search Results"
          subtitle="Results Based On Your Search"
          posters={movies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayoutHoc(Search);
