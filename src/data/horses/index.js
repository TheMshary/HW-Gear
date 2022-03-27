const poitouDonkey = require("./images/poitou-donkey.jpeg");
const dartmoorPony = require("./images/dartmoor-pony.jpeg");
const welsh = require("./images/welsh.jpeg");
const fjordHorse = require("./images/fjord-horse.jpeg");
const holsteiner = require("./images/holsteiner.jpeg");
const rottaler = require("./images/rottaler.jpeg");
const eastFrisian = require("./images/east-frisian.jpeg");
const babaryHorse = require("./images/babary-horse.jpeg");
const einsiedler = require("./images/einsiedler.jpeg");
const arabHorse = require("./images/arab-horse.jpeg");
const brabantHorse = require("./images/brabant-horse.jpeg");
const alpineHorse = require("./images/alpine-horse.jpeg");

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
  {
    name: "East Frisian",
    defence: 6,
    attack: 9,
    stamina: 9,
    level: 17,
    price: 10000,
    image: eastFrisian,
    premium: false,
  },
  {
    name: "Babary Horse",
    defence: 8,
    attack: 13,
    stamina: 10,
    level: 20,
    price: 15000,
    image: babaryHorse,
    premium: false,
  },
  {
    name: "Einsiedler",
    defence: 9,
    attack: 13,
    stamina: 13,
    level: 20,
    price: 15000,
    image: einsiedler,
    premium: false,
  },
  {
    name: "Arab Horse",
    defence: 10,
    attack: 15,
    stamina: 15,
    level: 23,
    price: 20000,
    image: arabHorse,
    premium: false,
  },
  {
    name: "Brabant Horse",
    defence: 12,
    attack: 17,
    stamina: 17,
    level: 25,
    price: 25000,
    image: brabantHorse,
    premium: false,
  },
  {
    name: "Alpine Horse",
    defence: 15,
    attack: 20,
    stamina: 20,
    level: 30,
    price: 30000,
    image: alpineHorse,
    premium: false,
  },
];

export default data;
