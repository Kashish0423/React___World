import React from "react";
import "../../App.css";
import Footer from "../Footer";

const Services = () => {
  const mystyle = {
    backgroundImage: `url("/images/img-10.jpg")`,
  };

  return (
    <>
      <h1 className='services' style={mystyle}>
        SERVICES
      </h1>
      <Footer />
    </>
  );
};

export default Services;
