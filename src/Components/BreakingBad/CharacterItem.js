import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className='bba-card'>
      <div className='bba-card-inner'>
        <div className='bba-card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='bba-card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
