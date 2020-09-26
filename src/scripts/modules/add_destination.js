import destinationsList from "../destinationList.js";

let form;
let uploadBtn;
let radioBtns;
let radioVisited;
let radioBucketlist;
let cityInput;
let countryInput;
let photoInput;
let newCity;
let newCountry;
let newPhoto;

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
    setValues();
    addDestination();
    event.preventDefault();
    console.log(destinationsList);
  });
  radioVisited.addEventListener("click", isVisited);
  radioBucketlist.addEventListener("click", isBucketlist);
  cityInput.addEventListener("change", (event) => {
    updateCity("city", event.target.value);
  });
  countryInput.addEventListener("change", (event) => {
    updateCountry("country", event.target.value);
  });
  photoInput.addEventListener("change", (event) => {
    updatePhoto("photo", event.target.value);
  });
}

function setValues() {
  return {
    city: cityInput,
    country: countryInput,
    visited: "",
    url: photoInput,
  };
}

function addDestination() {
  return destinationsList.push({ ...newCity, ...newCountry, ...newPhoto });
}

function isVisited() {
  if (radioVisited.checked === true) {
    newCity.visited = true;
  }
}

function isBucketlist() {
  if (radioBucketlist.checked === true) {
    newCity.visited = false;
  }
}

function initRadioBtn() {
  radioBtns.forEach((button) => {
    isVisited();
    isBucketlist();
  });
}

function updateCountry(fieldName, value) {
  console.log("updateCountry:", fieldName, value);
  newCountry = {
    ...newCountry,
    [fieldName]: value,
  };
}

function updateCity(fieldName, value) {
  console.log("updateCity:", fieldName, value);
  newCity = {
    ...newCity,
    [fieldName]: value,
  };
}

function updatePhoto(fieldName, value) {
  console.log("updatePhoto:", fieldName, value);
  newPhoto = {
    ...newPhoto,
    [fieldName]: value,
  };
}

function init() {
  cacheDom();
  bindEvents();
  initRadioBtn();
}

const module = { init };
export default module;
