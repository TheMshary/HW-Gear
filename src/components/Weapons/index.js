import React from "react";
import weapons from "../../data/weapons";
import Weapon from "./Weapon";

const Weapons = () => {
  const weaponList = weapons.map((weapon) => <Weapon weapon={weapon} />);
  return <div style={{ display: "flex", overflow: "auto" }}>{weaponList}</div>;
};

export default Weapons;
