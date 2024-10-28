import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";
import AppFooter from "../components/Footer/AppFooter.Component";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <AppFooter />
      </div>
    );
  };

export default DefaultLayoutHoc;
