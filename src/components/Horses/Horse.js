import React from "react";

const Horse = ({ horse }) => {
  // itemWidth is the size multiplier on the whole Horse item UI
  const itemWidth = 0.7;
  return (
    <div style={{ width: `${316 * itemWidth}px` }}>
      <img src={horse.image} width={`${316 * itemWidth}px`} alt={horse.name} />
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
