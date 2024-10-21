import React from "react";

const Cast = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="photo unavailable"
            className="h-full w-full object-center object-cover rounded-full"
          />
        </div>
        <h1 className="text-lg text-gray-800 font-semibold">
          {props.castName}
        </h1>
        <h4 className="text-base text-gray-700 font-semibold">{props.role}</h4>
      </div>
    </>
  );
};

export default Cast;
