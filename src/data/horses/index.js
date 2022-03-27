const poitouDonkey = require("./images/poitou-donkey.jpeg");
const dartmoorPony = require("./images/dartmoor-pony.jpeg");
const welsh = require("./images/welsh.jpeg");
const fjordHorse = require("./images/fjord-horse.jpeg");
const holsteiner = require("./images/holsteiner.jpeg");
const rottaler = require("./images/rottaler.jpeg");

const data = [
  {
    name: "Poitou Donkey",
    defence: 1,
    attack: 1,
    stamina: 1,
    level: 5,
    price: 1000,
    image: poitouDonkey,
    premium: false,
  },
  {
    name: "Dartmoor pony",
    defence: 2,
    attack: 2,
    stamina: 2,
    level: 7,
    price: 200,
    image: dartmoorPony,
    premium: false,
  },
  {
    name: "Welsh",
    defence: 3,
    attack: 3,
    stamina: 3,
    level: 8,
    price: 3000,
    image: welsh,
    premium: false,
  },
  {
    name: "Fjord horse",
    defence: 3,
    attack: 4,
    stamina: 3,
    level: 10,
    price: 4000,
    image: fjordHorse,
    premium: false,
  },
  {
    name: "Holsteiner",
    defence: 4,
    attack: 5,
    stamina: 3,
    level: 15,
    price: 5000,
    image: holsteiner,
    premium: false,
  },
  {
    name: "Rottaler",
    defence: 5,
    attack: 5,
    stamina: 5,
    level: 15,
    price: 5000,
    image: rottaler,
    premium: false,
  },
];

export default data;
