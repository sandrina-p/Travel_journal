import destinationsList from "../destinationList.js";
import events from "./pubsub.js";

let form;
let uploadBtn;
let radioBtns;
let radioVisited;
let radioBucketlist;
let cityInput;
let countryInput;
let photoInput;

function cacheDom() {
  form = document.getElementById("add-city-form");
  uploadBtn = document.getElementById("upload");
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
    //get the index of the destination pushed to the destinationsList
    const itemIndex = destinationsList.length - 1;
    events.publish("destinationAdded", itemIndex);
    console.log(destinationsList);
  });

  radioVisited.addEventListener("click", isVisited);
  radioBucketlist.addEventListener("click", isBucketlist);
  // update the city
  cityInput.addEventListener("change", (event) => {
    updateFormState("city", event.target.value);
  });
  // ...the country
  countryInput.addEventListener("change", (event) => {
    updateFormState("country", event.target.value);
  });
  //..and the photo of the new list item
  photoInput.addEventListener("change", (event) => {
    updateFormState("photo", event.target.value);
  });
}

let formState = {
  city: null,
  country: null,
  photo: null,
};

function addDestination() {
  return destinationsList.push(formState);
}

function updateFormState(fieldName, value) {
  formState[fieldName] = value;
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
