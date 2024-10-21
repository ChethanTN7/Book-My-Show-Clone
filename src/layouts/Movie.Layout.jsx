import React from "react";
// import MovieNavbar from "../components/Navbar/MovieNavbar.Component";
import Navbar from "../components/Navbar/Navbar.Component";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        {/* <MovieNavbar /> */}
        <Navbar />
        <Component {...props} />
      </div>
    );
  };

export default MovieLayoutHoc;
