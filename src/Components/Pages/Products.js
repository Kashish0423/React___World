import React from "react";
import "../../App.css";
import Footer from "../Footer";

const Products = () => {
  const mystyle = {
    backgroundImage: `url("/images/img-5.jpg")`,
  };

  return (
    <>
      <h1 className='products' style={mystyle}>
        {" "}
        PRODUCTS
      </h1>
      <Footer />
    </>
  );
};

export default Products;
