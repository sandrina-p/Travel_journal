import destinationsList from "../destinationList.js";

let form;
let uploadBtn;
let radioBtns;
let radioVisited;
let radioBucketlist;
let allInputs;
let newCity;
let cityInput;
let countryInput;
let photoUrl;

function cacheDom() {
  form = document.getElementById("add-city-form");
  uploadBtn = document.getElementById("upload");
  radioBtns = document.querySelectorAll("input[type=radio]");
  radioVisited = document.getElementById("rd-visited");
  radioBucketlist = document.getElementById("rd-bucketlist");
  newCity = createCity();
  cityInput = document.getElementById("inputCity").value;
  countryInput = document.getElementById("inputCountry").value;
}

function bindEvents() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  uploadBtn.addEventListener("click", createCity);
  uploadBtn.addEventListener("click", addCity);
  uploadBtn.addEventListener("click", () => {
    console.log(destinationsList);
  });
  radioVisited.addEventListener("click", isVisited);
  radioBucketlist.addEventListener("click", isBucketlist);
}

function createCity() {
  return {
    city: cityInput,
    country: countryInput,
    visited: "",
  };
}

function addCity() {
  return destinationsList.push(newCity);
}

function isVisited() {
  if (radioVisited.checked === true) {
    newCity.visited = true;
    console.log(newCity);
    return newCity;
  }
}

function isBucketlist() {
  if (radioBucketlist.checked === true) {
    newCity.visited = false;
    console.log(newCity);
    return newCity;
  }
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
