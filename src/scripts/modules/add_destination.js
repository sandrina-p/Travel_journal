import destinationsList, { addDestination } from "../destinationList.js";
import events from "./pubsub.js";

let form;
let radioBtns;
let radioVisited;
let radioBucketlist;
let cityInput;
let countryInput;
let photoInput;
//new list item state before the item is added
let formState = {
  id: Math.round(Math.random() * 100000),
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
    addDestination(formState);
    event.preventDefault();
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
}

// localStorage.clear();

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
