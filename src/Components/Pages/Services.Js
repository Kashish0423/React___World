import React from "react";
import "../../App.css";
import Footer from "../Footer";
import TodoApp from "../TodoApp/TodoApp";

const Services = () => {
  const mystyle = {
    backgroundImage: `url("/images/img-10.jpg")`,
  };

  return (
    <>
      <h1 className='services' style={mystyle}>
        <TodoApp />
      </h1>
      <Footer />
    </>
  );
};

export default Services;
