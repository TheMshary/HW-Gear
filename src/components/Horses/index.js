import React from "react";
import horses from "../../data/horses";
import Horse from "./Horse";

const Horses = () => {
  const horseList = horses.map((horse) => <Horse horse={horse} />);
  return <div>{horseList}</div>;
};

export default Horses;
