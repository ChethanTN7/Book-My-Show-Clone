import React, { useContext, useState } from "react";
import { MovieContext } from "../../contexts/Movie.Context";
import MovieInfo from "./MovieInfo.Component";
import PaymentModel from "../PaymentModel/Payment.Component";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const genres = movie.genres?.map(({ name }) => name).join(" | ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const BuyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <div>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      {/* Mobile screen */}
      <div className="lg:hidden w-full">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="cover poster"
          className="m-4 rounded"
          style={{ width: "calc(100%-2rem)" }}
        />
      </div>
      <div className="flex flex-col gap-3 lg:hidden">
        <div className="flex flex-col-reverse gap-3 px-4 my-3">
          <div className="text-black text-lg flex flex-col gap2 md:px-4">
            <h4>{Math.round(movie.vote_count / 1000)}K Ratings</h4>
            <h4>kannada, Hindi, Telugu, Malayalam, English</h4>
            <h4>
              {Math.floor(movie.runtime / 60)}Hrs {movie.runtime % 60}Mins |{" "}
              {genres}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg hover:bg-red-400"
            onClick={rentMovie}
          >
            Rent ₹149
          </button>
          <button
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg hover:bg-red-500"
            onClick={BuyMovie}
          >
            Buy ₹599
          </button>
        </div>
      </div>

      {/* large screen size */}
      <div
        className="hidden lg:block relative w-full background"
        style={{ height: "30rem" }}
      >
        <div
          className="absolute w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 20.95%, rgb(34, 34, 34) 38.8%, rgba(34, 34, 34, 0.04) 94.47%, rgba(34, 34, 34, 0) 100%  )",
          }}
        >
          <div className="absolute left-24 top-10 z-30 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Poster"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="">
              <MovieInfo movie={movie} />
            </div>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="Backdrop poster"
          className="absolute left-1/4 w-9/12 h-full object-cover object-center z-0"
        />
      </div>
    </div>
  );
};

export default MovieHero;
