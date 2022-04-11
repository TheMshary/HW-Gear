import React from "react";
import gold from "../../data/gold.png";

const Weapon = ({ weapon }) => {
  // itemWidth is the size multiplier on the whole Weapon item UI
  const itemWidth = 0.7;
  weapon.image = require("../../data/weapons/images/" + weapon.name + ".jpg");
  return (
    <div style={{ width: `${316 * itemWidth}px` }}>
      <p style={{ fontWeight: "bold" }}>{weapon.name}</p>
      <img
        src={weapon.image}
        width={`${316 * itemWidth}px`}
        alt={weapon.name}
      />
      <p>Hitpoints: {weapon.hitpoints}</p>
      <p>Agility: {weapon.agility}</p>
      <p>Level Required: {weapon.level}</p>
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
          {weapon.price}
        </span>
      </p>
      {weapon.premium && <p style={{ textAlign: "center" }}>-Premium-</p>}
    </div>
  );
};

export default Weapon;
