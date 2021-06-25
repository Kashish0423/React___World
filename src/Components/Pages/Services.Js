import React from "react";
// import "../../App.css";
import Footer from "../Footer";
import TodoApp from "../TodoApp/TodoApp";

const Services = () => {
  const mystyle = {
    backgroundImage: `url("/images/img-2.jpg")`,
  };

  return (
    <div style={mystyle}>
      <TodoApp />

      <Footer />
    </div>
  );
};

export default Services;
