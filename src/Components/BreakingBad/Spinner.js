import React from "react";
// import spinner from "images/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={"images/spinner.gif"}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt='Loading'
      />
    </>
  );
};

export default Spinner;
