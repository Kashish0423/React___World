import React from "react";
import "../../App.css";
import Footer from "../Footer";

const SignUp = () => {
  const mystyle = {
    backgroundImage: `url("/images/img-8.jpg")`,
  };

  return (
    <>
      <h1 className='sign-up' style={mystyle}>
        SIGN UP
      </h1>
      <Footer />
    </>
  );
};

export default SignUp;
