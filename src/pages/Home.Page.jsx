import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layouts/Default.Layout";

// components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

import axios from "axios";

const HomePage = () => {
  const [recommondedMovies, setRecommondedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  // Recommonded Movies
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=ccc51bf215ad9cc52841df4cfc0850c5");
      setRecommondedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  // // Premier Movies
  // useEffect(() => {
  //   const requestPopularMovies = async () => {
  //     const getPopularMovies = await axios.get("/movie/popular");
  //     setPremierMovies(getPopularMovies.data.results);
  //   };
  //   requestPopularMovies();
  // }, []);

  // // Online Stream Events
  // useEffect(() => {
  //   const requestUpCommingMovies = async () => {
  //     const getUpCommingMovies = await axios.get("/movie/upcoming");
  //     setOnlineStreamEvents(getUpCommingMovies.data.results);
  //   };
  //   requestUpCommingMovies();
  // }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">
          The Best Of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of rocommended movies"
          posters={recommondedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand New Releases Every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
