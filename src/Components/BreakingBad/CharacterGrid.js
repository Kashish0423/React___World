import React from "react";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading ....</h1>
  ) : (
    <section className='bba-cards'>
      {items.map((item) => (
        <h2>{item.name}</h2>
      ))}
    </section>
  );

  //   return (
  //     <section className='bba-cards'>
  //       {items.map((item) => (
  //         <h1>{item.name}</h1>
  //       ))}
  //     </section>
  //   );
};

export default CharacterGrid;
