import React from "react";
import gold from "../../data/gold.png";

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
      <p style={{ display: "flex" }}>
        <img src={gold} width={`${40 * 0.7}px`} alt="gold coins" />{" "}
        <span
          style={{
            fontWeight: "bold",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "10px",
          }}
        >
          {horse.price}
        </span>
      </p>
      {horse.premium && <p style={{ textAlign: "center" }}>-Premium-</p>}
    </div>
  );
};

export default Horse;
