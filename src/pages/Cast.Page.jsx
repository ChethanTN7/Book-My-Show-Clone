import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layouts/Default.Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const CastPage = () => {
  const { id } = useParams();

  const [cast, setCast] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  useEffect(() => {
    const requireCast = async () => {
      const getCast = await axios.get(`/person/${id}`);
      setCast(getCast.data);
    };
    requireCast();
  }, [id]);

  useEffect(() => {
    const requireMovies = async () => {
      const getMovies = await axios.get(`/person/${id}/movie_credits`);
      setMovies(getMovies.data.cast.concat(getMovies.data.crew));
    };
    requireMovies();
  }, [id]);

  if (cast) {
    return (
      <div>
        <div className="p-12 m-2 flex-col md:flex-col lg:flex-row flex bg-darkBackground-800 text-white rounded-xl items-center">
          <div className="min-w-80 w-1/5 flex justify-center items-center overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="px-4 h-full justify-center flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold text-center lg:text-left">
              {cast.name}
            </h1>
            <h2 className="text-sm font-semibold">
              Also Known as:
              <p className="font-normal">{cast.also_known_as.join(" | ")}</p>
            </h2>
            <h2 className="text-sm font-semibold">
              About:
              <p className="font-normal">{cast.biography}</p>
            </h2>
            <h2 className="text-sm font-semibold">
              Date Of Birth:
              <p className="font-normal">{cast.birthday}</p>
            </h2>
            {cast.deathday ? (
              <h2 className="text-sm font-semibold">
                Date Of Death:
                <p className="font-normal">{cast.deathday}</p>
              </h2>
            ) : (
              <></>
            )}
            <h2 className="text-sm font-semibold">
              Known for Department:
              <p className="font-normal">{cast.known_for_department}</p>
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <PosterSlider
            title="Search Results"
            subtitle="Results Based On Your Search"
            posters={movies}
            isDark={false}
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DefaultLayoutHoc(CastPage);
