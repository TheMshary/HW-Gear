import React from "react";
import gold from "../../data/gold.png";

const Horse = ({ horse }) => {
  // itemWidth is the size multiplier on the whole Horse item UI
  const itemWidth = 0.7;
  horse.image = require("../../data/horses/images/" + horse.name + ".jpg");
  return (
    <div style={{ width: `${316 * itemWidth}px` }}>
      <p style={{ fontWeight: "bold" }}>{horse.name}</p>
      <img src={horse.image} width={`${316 * itemWidth}px`} alt={horse.name} />
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
