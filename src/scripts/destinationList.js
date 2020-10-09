import events from "./modules/pubsub";

export var moment = require("moment");

var myDate = new Date();
var dateFormating = moment(myDate).format("LL");

console.log(dateFormating);

// events.subscribe("sendToVisited", (destination) => {
//   let index = destinationsList.indexOf(destination);
//   destinationsList[index].visited = true;
//   console.log(destinationsList[index]);
//   return destinationsList;
// });

let destinationsList = [
  //Visited

  {
    city: "Rome",
    country: "Italy",
    photo: require("../img/rome.jpg"),
    visited: true,
  },
  {
    city: "Milan",
    country: "Italy",
    photo: require("../img/milan.jpg"),
    visited: true,
  },
  {
    city: "Venice",
    country: "Italy",
    photo: require("../img/venice.jpg"),
    visited: true,
  },
  {
    city: "Padua",
    country: "Italy",
    photo: require("../img/padua.jpg"),
    visited: true,
  },
  {
    city: "Verona",
    country: "Italy",
    photo: require("../img/verona.jpg"),
    visited: true,
  },
  {
    city: "Florence",
    country: "Italy",
    photo: require("../img/florence.jpg"),
    visited: true,
  },
  {
    city: "Bergamo",
    country: "Italy",
    photo: require("../img/bergamo.jpg"),
    visited: true,
  },
  {
    city: "Barcelona",
    country: "Spain",
    photo: require("../img/barcelona.jpg"),
    visited: true,
  },
  {
    city: "Lloret de mar",
    country: "Spain",
    photo: require("../img/lloretdemar.jpg"),
    visited: true,
  },
  {
    city: "Nice",
    country: "France",
    photo: require("../img/nice.jpg"),
    visited: true,
  },
  {
    city: "Cannes",
    country: "France",
    photo: require("../img/cannes.jpg"),
    visited: true,
  },
  {
    city: "Stockholm",
    country: "Sweden",
    photo: require("../img/stockholm.jpg"),
    visited: true,
  },
  {
    city: "Malmo",
    country: "Sweeden",
    photo: require("../img/malmo.jpg"),
    visited: true,
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    photo: require("../img/copenhagen.jpg"),
    visited: true,
  },
  {
    city: "Vienna",
    country: "Austria",
    photo: require("../img/vienna.jpg"),
    visited: true,
  },
  {
    city: "Monaco",
    country: "Monaco",
    photo: require("../img/monaco.jpg"),
    visited: true,
  },
  {
    city: "Budapest",
    country: "Hungary",
    photo: require("../img/budapest.jpg"),
    visited: true,
  },
  {
    city: "Prague",
    country: "Czech republic",
    photo: require("../img/prague.jpg"),
    visited: true,
  },
  {
    city: "Belgrade",
    country: "Serbia",
    photo: require("../img/belgrade.jpg"),
    visited: true,
  },
  {
    city: "Zlatibor",
    country: "Serbia",
    photo: require("../img/zlatibor.jpg"),
    visited: true,
  },
  {
    city: "Kopaonik",
    country: "Serbia",
    photo: require("../img/kopaonik.jpg"),
    visited: true,
  },
  {
    city: "Bratislava",
    country: "Slovakia",
    photo: require("../img/bratislava.jpg"),
    visited: true,
  },
  {
    city: "Sofia",
    country: "Bulgaria",
    photo: require("../img/sofia.jpg"),
    visited: true,
  },
  {
    city: "Bansko",
    country: "Slovakia",
    photo: require("../img/bansko1.jpg"),
    visited: true,
  },
  {
    city: "Varna",
    country: "Bulgaria",
    photo: require("../img/varna.jpg"),
    visited: true,
  },
  {
    city: "Thessaloniki",
    country: "Greece",
    photo: require("../img/thessaloniki.jpg"),
    visited: true,
  },
  {
    city: "Istanbul",
    country: "Turkey",
    photo: require("../img/istanbul.jpg"),
    visited: true,
  },

  //Wishlist

  {
    city: "Paris",
    country: "France",
    photo: require("../img/paris.jpg"),
    visited: false,
  },
  {
    city: "Santorini",
    country: "Greece",
    photo: require("../img/santorini.jpg"),
    visited: false,
  },
  {
    city: "New York",
    country: "U.S.",
    photo: require("../img/newyork.jpg"),
    visited: false,
  },
  {
    city: "Marrakech",
    country: "Morocco",
    photo: require("../img/marrakech.jpg"),
    visited: false,
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    photo: require("../img/Amsterdam.png"),
    visited: false,
  },
  {
    city: "Berlin",
    country: "Germany",
    photo: require("../img/berlin.jpg"),
    visited: false,
  },
  {
    city: "Lisbon",
    country: "Porugal",
    photo: require("../img/lisbon.jpg"),
    visited: false,
  },
  {
    city: "Tokyo",
    country: "Japan",
    photo: require("../img/tokyo.jpg"),
    visited: false,
  },
  {
    city: "Sienna",
    country: "Italy",
    photo: require("../img/sienna.jpg"),
    visited: false,
  },
  {
    city: "Dublin",
    country: "Ireland",
    photo: require("../img/dublin.jpg"),
    visited: false,
  },
  {
    city: "Saint petersburg",
    country: "Russia",
    photo: require("../img/saintpetersburg.jpg"),
    visited: false,
  },
];

// destinationsList[0].visited = false;
// console.log(destinationsList[0]);
export default destinationsList;
