import React, { useState } from "react";
import PaymentModel from "../PaymentModel/Payment.Component";

const MovieInfo = ({ movie }) => {
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
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-5 px-4 my-3 max-w-screen-md">
        <h1 className="text-5xl font-extrabold text-white mx-4">
          {movie.original_title}
        </h1>
        <div className="text-white text-xl flex flex-col gap2 md:px-4">
          <h4>{Math.round(movie.vote_count / 1000)}K Ratings</h4>
          <h4>kannada, Hindi, Telugu, Malayalam, English</h4>
          <h4>
            {Math.floor(movie.runtime / 60)}Hrs {movie.runtime % 60}Mins |{" "}
            {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xl px-4">
          <button
            className="bg-red-500 w-60 py-3 text-white font-semibold rounded-lg hover:bg-red-400"
            onClick={rentMovie}
          >
            Rent ₹149
          </button>
          <button
            className="bg-red-600 w-60 py-3 text-white font-semibold rounded-lg hover:bg-red-500"
            onClick={BuyMovie}
          >
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
