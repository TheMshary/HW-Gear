import React from "react";

const Horse = ({ horse }) => {
  return (
    <div>
      <p>{horse.name}</p>
      <img src={horse.image} alt={horse.name} />
    </div>
  );
};

export default Horse;
