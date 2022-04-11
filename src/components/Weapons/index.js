import React from "react";
import weapons from "../../data/weapons";
import Weapon from "./Weapon";

const Weapons = () => {
  const weaponList = weapons.map((weapon) => <Weapon weapon={weapon} />);
  return (
    <div style={{ display: "flex", overflow: "auto" }}>
      <div>
        <p style={{ width: "20px" }}> </p>
      </div>
      {weaponList}
    </div>
  );
};

export default Weapons;
