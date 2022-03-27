import React from "react";
import horses from "../data/horses";

const Horses = () => {
  const horseList = horses.map((horse) => <p>{horse.name}</p>);
  return <div>{horseList}</div>;
};

export default Horses;
