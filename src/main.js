import moment from "moment";
import destinationsList from "./scripts/destinationList.js";

// //get list of urls
// const getURL = (destinationsList) => {
//   const url = destinationsList.map((item) => item.photo.valueOf());
//   return url;
// };

// const createEls = function () {
//   return {
//     figureEl: function () {
//       const figure = document.createElement("figure");
//       figure.classList.add("img-container");
//       document.querySelector(".gallery").appendChild(figure);
//       return figure;
//     },
//     imgEl: function () {
//       const img = document.createElement("img");
//       img.style.objectFit = "cover";
//       figure.appendChild(img);
//       return img;
//     },
//     captionEl: function () {
//       const figcaption = document.createElement("figcaption");
//       figcaption.classList.add("caption");
//       return figcaption;
//     },
//   };
// };

// const addCityName = () => {
//   //create elements for city and country names
//   const cityName = caption.appendChild(document.createElement("h1"));
//   cityName.classList.add("caption__city");

//   const countryName = caption.appendChild(document.createElement("h2"));
//   countryName.classList.add("caption__country");

//   figure.appendChild(caption);
//   return {
//     cityName,
//     countryName,
//   };
// };

// const cityEls = new createEls();
// let figure = cityEls.figureEl();
// let caption = cityEls.captionEl();

// const getCityName = new addCityName();
// let city = getCityName.cityName;
// let country = getCityName.countryName;

// //create html elements for each city
// destinationsList.forEach((destination) => {
//   //set url for each photo
//   let cityEl = cityEls.imgEl();
//   cityEl.src = destination.photo;

//   figure = new cityEls.figureEl();
//   caption = new cityEls.captionEl();

//   addCityName();
//   city.innerHTML = destination.city;
//   country.innerHTML = destination.country;

//   //add the correct class to img wrapper

//   if (destination.visited === true) {
//     figure.classList.add("visited");
//   } else {
//     figure.classList.add("bucketlist");
//   }

//   return getURL(destinationsList);
// });

// Object Literal Module
(function () {
  // Set the "shared" variables among different methods:
  let buttons;
  let visited;
  let bucketlist;
  let all;
  let gallery;
  let activeBtn;

  //shrink header on scroll

  function cacheDom() {
    buttons = Array.from(document.querySelector(".buttons").children);
    visited = buttons[1];
    bucketlist = buttons[2];
    all = buttons[3];
    gallery = document.querySelector(".gallery");
    activeBtn = null;
  }

  function bindEvents() {
    visited.addEventListener("click", addVisited);
    bucketlist.addEventListener("click", addBucketlist);
    all.addEventListener("click", showAll);
    //visited is the default active button on page load
    document.addEventListener("DOMContentLoaded", setActive);
    document.addEventListener("scroll", shrinkNav);
    window.addEventListener("scroll", restoreNav);
  }

  function renderDestination(destination) {
    // create destination wrapper
    const elDestination = document.createElement("figure");
    elDestination.classList.add("img-container");

    // add the correct class to elDestination wrapper
    if (destination.visited === true) {
      elDestination.classList.add("visited");
    } else {
      elDestination.classList.add("bucketlist");
    }

    // create img element
    const img = document.createElement("img");
    img.style.objectFit = "cover"; // TODO - Prefer adding a CSS class instead.
    img.src = destination.photo;
    // add img to destination
    elDestination.appendChild(img);

    //set img captions
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("caption");
    figcaption.insertAdjacentHTML(
      "beforeend",
      `<h2 class='caption__city'>${destination.city}</h2>`
    );
    figcaption.insertAdjacentHTML(
      "beforeend",
      `<h3 class='caption__country'>${destination.country}</h3>`
    );
    // add captions to destination
    elDestination.appendChild(figcaption);

    // Return the destination HTML
    return elDestination;
  }

  function render() {
    // Create DOM elements for each destination
    destinationsList.forEach((destination) => {
      const elDestination = renderDestination(destination);
      gallery.appendChild(elDestination);
    });
  }

  function setActive() {
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const current = event.target;

        if (activeBtn) {
          activeBtn.classList.remove("active-button");
          activeBtn.setAttribute("aria-pressed", false);
        }

        current.setAttribute("aria-pressed", true);
        current.classList.add("active-button");

        activeBtn = current;
      });
    });
    document.querySelector(".button__visited").click();
  }

  function addVisited() {
    gallery.classList.add("visited");
    gallery.classList.remove("bucketlist");
  }

  function addBucketlist() {
    gallery.classList.add("bucketlist");
    gallery.classList.remove("visited");
  }

  function showAll() {
    gallery.classList.remove("visited");
    gallery.classList.remove("bucketlist");
  }

  //shrink header on scroll
  function shrinkNav() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("shrink");
  }

  // restore nav size on scroll up
  function restoreNav() {
    const scrollPos = 0;
    if (document.body.getBoundingClientRect().top === scrollPos) {
      document.querySelector(".navbar").classList.remove("shrink");
    }
  }

  function init() {
    cacheDom();
    bindEvents();
    render();
  }

  init();
})();

//create new city
const addCity = function () {
  return {
    city: inputCity.value,
    country: inputCountry.value,
    visited: "",
  };
};
const newCity = new addCity();

const newCityForm = document.getElementById("add-city-form");
console.log(newCityForm);

//submit form
newCityForm.addEventListener("submit", (event) => {
  addCity();
  destinationsList.push(newCity);
  console.log(destinationsList);
  event.preventDefault();
});

// ?  clear input fields when the upload button is clicked
const clearFields = () => {
  const uploadBtn = document.querySelector(".upload");
  const inputs = document.querySelectorAll("input");

  // uploadBtn.addEventListener("click", () => {
  //   inputs.forEach((input) => {
  //     input.value = "";
  //   });
  // });
};
clearFields();

//set the value of newCity.visited (radio buttons)
const radioButtons = () => {
  const rdVisited = document.getElementById("rd-visited");
  const rdBucketlist = document.getElementById("rd-bucketlist");

  rdVisited.addEventListener("click", () => {
    if (rdVisited.checked == true) {
      newCity.visited = true;
      console.log(newCity);
    }
  });
  rdBucketlist.addEventListener("click", () => {
    if (rdBucketlist.checked == true) {
      newCity.visited = false;
      console.log(newCity);
    }
  });
};
radioButtons();
