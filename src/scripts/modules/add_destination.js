import destinationsList from "../destinationList.js";
import events from "./pubsub.js";

let form;
let radioBtns;
let radioVisited;
let radioBucketlist;
let cityInput;
let countryInput;
let photoInput;
// let storage;
//new list item state before the item is added
let formState = {
  city: null,
  country: null,
  photo: null,
};

function cacheDom() {
  form = document.getElementById("add-city-form");
  radioBtns = document.querySelectorAll("input[type=radio]");
  radioVisited = document.getElementById("rd-visited");
  radioBucketlist = document.getElementById("rd-bucketlist");
  cityInput = document.getElementById("inputCity");
  countryInput = document.getElementById("inputCountry");
  photoInput = document.getElementById("inputImg");
}

function bindEvents() {
  form.addEventListener("submit", (event) => {
    addDestination();
    event.preventDefault();
    //get the index of the destination pushed to the destinationsList and publish it
    const itemIndex = destinationsList.length - 1;
    events.publish("destinationAdded", itemIndex);
    storeNew();
    form.reset();
  });
  // document.addEventListener("DOMContentLoaded", loadNew);
  radioVisited.addEventListener("click", isVisited);
  radioBucketlist.addEventListener("click", isBucketlist);
  cityInput.addEventListener("change", (event) => {
    updateFormState("city", event.target.value);
  });
  countryInput.addEventListener("change", (event) => {
    updateFormState("country", event.target.value);
  });
  photoInput.addEventListener("change", (event) => {
    updateFormState("photo", event.target.value);
  });
}

//update the formState values for city, country and photo on 'change' event
function updateFormState(fieldName, value) {
  formState[fieldName] = value;
}

function storeNew() {
  localStorage.setItem("newDestination", JSON.stringify(formState));

  // // get list of destinations and parse it
  // const storedListLS = localStorage.getItem("destinations");
  // const storedList = JSON.parse(storedListLS);

  // // update the list with the new destination (formState).
  // const newList = [...storedListLS, formState];

  // // Replace the `destinations`, with the new list:
  // localStorage.setItem("destinations", SON.stringify(newList));
}

// function loadNew() {
//   let isStored = localStorage.getItem("newDestination");
//   let data;
//   if (isStored) {
//     data = JSON.parse(isStored);
//   } else {
//     data = [];
//   }
//   localStorage.setItem("newDestination", data);
// }

//push new list item to destinationList
function addDestination() {
  return destinationsList.push(formState);
}

function isVisited() {
  updateFormState("visited", true);
}

function isBucketlist() {
  updateFormState("visited", false);
}

function initRadioBtn() {
  radioBtns.forEach((button) => {
    isVisited();
    isBucketlist();
  });
}

function init() {
  cacheDom();
  bindEvents();
  initRadioBtn();
}

const module = { init };
export default module;
