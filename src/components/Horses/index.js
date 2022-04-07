import React from "react";
import horses from "../../data/horses";
import Horse from "./Horse";

// TODO: Carousel
// Create carousel manually for customized behavior
// To make it work for PCs easily, allow it to scroll
//  right when user scrolls down or right, and scroll
//  left when user scrolls up or left.
// Guide: https://bit.ly/3NXlriC

const Horses = () => {
  const horseList = horses.map((horse) => <Horse horse={horse} />);
  return <div style={{ display: "flex" }}>{horseList}</div>;
};

export default Horses;
