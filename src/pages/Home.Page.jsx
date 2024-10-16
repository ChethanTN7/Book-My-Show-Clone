import React, { useState } from "react";
import DefaultLayoutHoc from "../layouts/Default.Layout";

// components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PoasterSlider from "../components/PoasterSlider/PoasterSlider.Component";

const HomePage = () => {
  const [recommondedMovies, setRecommondedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
      <HeroCarousel />
      <div></div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
