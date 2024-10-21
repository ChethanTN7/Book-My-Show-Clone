import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      backdrop_path: "/dF6FjTZzRTENfB4R17HDN20jLT2.jpg",
      id: 135397,
      title: "Jurassic World",
      original_title: "Jurassic World",
      overview:
        "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
      poster_path: "/A0LZHXUzo5C60Oahvt7VxvwuzHw.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [28, 12, 878, 53],
      popularity: 91.501,
      release_date: "2015-06-06",
      video: false,
      vote_average: 6.691,
      vote_count: 20238,
    },
    {
      backdrop_path: "/79bJL9ydAMYVltuNTt4VhxORqIz.jpg",
      id: 329,
      title: "Jurassic Park",
      original_title: "Jurassic Park",
      overview:
        "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
      poster_path: "/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [12, 878],
      popularity: 41.229,
      release_date: "1993-06-11",
      video: false,
      vote_average: 7.951,
      vote_count: 16180,
    },
    {
      backdrop_path: "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
      id: 383498,
      title: "Deadpool 2",
      original_title: "Deadpool 2",
      overview:
        "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
      poster_path: "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [28, 35, 12],
      popularity: 104.852,
      release_date: "2018-05-10",
      video: false,
      vote_average: 7.493,
      vote_count: 17812,
    },
    {
      backdrop_path: "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
      id: 260513,
      title: "Incredibles 2",
      original_title: "Incredibles 2",
      overview:
        "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
      poster_path: "/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [28, 12, 16, 10751],
      popularity: 76.24,
      release_date: "2018-06-14",
      video: false,
      vote_average: 7.464,
      vote_count: 12762,
    },
  ]);

  const settingsLG = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image, index) => {
            return (
              <div className="w-full h-66 md:h-80 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image, index) => {
            return (
              <div className="w-full h-66 md:h-80 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
