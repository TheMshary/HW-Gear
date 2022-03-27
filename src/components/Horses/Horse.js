import React from "react";

const Horse = ({ horse }) => {
  return (
    <div style={{ width: "316px" }}>
      <img src={horse.image} alt={horse.name} />
      <p style={{ textAlign: "center" }}>{horse.name}</p>
      <p>Attack: {horse.attack}</p>
      <p>Defence: {horse.defence}</p>
      <p>Stamina: {horse.stamina}</p>
      <p>Level Required: {horse.level}</p>
      <p>Price: {horse.price} Gold</p>
      {horse.premium && <p>-Premium-</p>}
    </div>
  );
};

export default Horse;
