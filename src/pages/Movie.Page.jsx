import React, { useEffect, useState, useContext } from "react";
import MovieLayoutHoc from "../layouts/Movie.Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../contexts/Movie.Context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Cast from "../components/Cast/Cast.Component";

const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommondedMovies, setRecommondedMovies] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast.concat(getCast.data.crew));
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommondedMovies = async () => {
      const getRecommondedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommondedMovies(getRecommondedMovies.data.results);
    };
    requestRecommondedMovies();
  }, [id]);

  useEffect(() => {
    const requrireMovie = async () => {
      const getMovieData = await axios(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requrireMovie();
  }, [id]);

  const settingsCast = {
    infinite: false,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-2/1">
        <div className="flex flex-col items-start gap3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About The Movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="mb-8">
          <h1 className="text-gray-800 font-bold text-2xl mb-3">
            Aplicable Offers
          </h1>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-500 border-dashed border-2 rounded-md">
              <div className="h-8 w-8">
                <FaCcVisa className="h-full w-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offers
                </h3>
                <p className="text-gray-500">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-500 border-dashed border-2 rounded-md">
              <div className="h-8 w-8">
                <FaCcApplePay className="h-full w-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-500">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Crew and cast */}
        <div className="my-8 bg-premier-300 p-5 rounded-md">
          <h2 className="text-gray-900 font-bold text-2xl mb-4 ">
            Cast and Crew
          </h2>
          <Slider {...settingsCast}>
            {cast.map((castData, index) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
                id={castData.id}
                department={castData.department}
                key={index}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          {/* recommended movies */}
          <PosterSlider
            title="Recommended Movies"
            posters={recommondedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          {/* BMS exclusive */}
          <PosterSlider
            title="BMS XCLUSIVE"
            posters={similarMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
