import moment from "./scripts/destinationList.js";
import destinationsList from "./scripts/destinationList.js";
import moduleDestinations from "./scripts/modules/destinations.js";
import addNewCity from "./scripts/modules/add_destination.js";
import events from "./scripts/modules/pubsub.js";
moduleDestinations.init();
addNewCity.init();
