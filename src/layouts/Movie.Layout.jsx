import React from "react";
// import MovieNavbar from "../components/Navbar/MovieNavbar.Component";
import Navbar from "../components/Navbar/Navbar.Component";
import AppFooter from "../components/Footer/AppFooter.Component";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        {/* <MovieNavbar /> */}
        <Navbar />
        <Component {...props} />
        <AppFooter />
      </div>
    );
  };

export default MovieLayoutHoc;
