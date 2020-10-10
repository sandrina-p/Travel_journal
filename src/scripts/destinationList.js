import events from "./modules/pubsub.js";

// export var moment = require("moment");

// var myDate = new Date();
// var dateFormating = moment(myDate).format("LL");

// console.log(dateFormating);

let destinationsObj = {
  //Visited
  rome123: {
    id: "rome123",
    city: "Rome",
    country: "Italy",
    photo: require("../img/rome.jpg"),
    visited: true,
  },
  milan123: {
    id: "milan123",
    city: "Milan",
    country: "Italy",
    photo: require("../img/milan.jpg"),
    visited: true,
  },
};

const destinationsList = Object.keys(destinationsObj).map(
  (id) => destinationsObj[id]
);

export default destinationsList;

export function addDestination(newItem) {
  destinationsObj[newItem.id] = newItem;
  events.publish("destinationAdded", newItem);
}
