import moment from "moment";
import destinationsList from "./scripts/destinationList.js";

//get list of urls
const getURL = (destinationsList) => {
  const url = destinationsList.map((item) => item.photo.valueOf());
  return url;
};

//create html elements for each city
destinationsList.forEach((destination) => {
  //create img wrapper
  const createImg = () => {
    const figure = document.createElement("figure");
    figure.classList.add("img-container");

    //create img element
    const img = document.createElement("img");
    img.style.objectFit = "cover";
    //add img to figure element
    document.querySelector(".gallery").appendChild(figure);
    figure.appendChild(img);

    //set img captions
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("caption");
    figure.appendChild(figcaption);
    figcaption.insertAdjacentHTML(
      "beforeend",
      `<h2 class='caption__city'>${destination.city}</h2>`
    );
    figcaption.insertAdjacentHTML(
      "beforeend",
      `<h3 class='caption__country'>${destination.country}</h3>`
    );

    //set url for each photo
    img.src = destination.photo;

    //add the correct class to lists of visited/bucketlist cities
    if (destination.visited === true) {
      figure.classList.add("visited");
    } else {
      figure.classList.add("bucketlist");
    }
  };

  return createImg(getURL(destinationsList));
});

//connect lists and buttons

// get buttons
const visitedButton = document.querySelector(".button__visited");
const bucketlistButton = document.querySelector(".button__buckelist");
const allButton = document.querySelector(".button__all");
//get all photos
const galleryList = document.querySelector(".gallery");

//set .visited as default list
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".button__visited").click();
});

visitedButton.addEventListener("click", () => {
  galleryList.classList.add("visited");
  galleryList.classList.remove("bucketlist");
});

bucketlistButton.addEventListener("click", () => {
  galleryList.classList.add("bucketlist");
  galleryList.classList.remove("visited");
});

allButton.addEventListener("click", () => {
  galleryList.classList.remove("bucketlist");
  galleryList.classList.remove("visited");
});

//Set active state on clicked button
const buttons = document.querySelectorAll(".button");
let activeBtn = null;

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

// Object Literal Module attempt

// (function () {
//   const buttons = {
//     init: function () {
//       this.cacheDom();
//       this.bindEvents();
//       // this.render();
//     },

//     cacheDom: function () {
//       this.buttons = Array.from(document.querySelector(".buttons").children);
//       this.visited = this.buttons[0];
//       this.bucketlist = this.buttons[1];
//       this.all = this.buttons[2];
//       this.gallery = document.querySelector(".gallery");
//     },

//     bindEvents: function () {
//       this.visited.addEventListener("click", addVisited);
//       this.bucketlist.addEventListener("click", addBucketlist);
//       this.all.addEventListener("click", showAll);
//     },

//     addVisited: function () {
//       this.gallery.classList.add("visited");
//       this.gallery.classList.remove("bucketlist");
//     },

//     addBucketlist: function () {
//       this.gallery.classList.add("bucketlist");
//       this.gallery.classList.remove("visited");
//     },
//     showAll: function () {
//       this.gallery.classList.remove("visited");
//       this.gallery.classList.remove("bucketlist");
//     },
//   };

//   buttons.init();
// })();

//shrink header on scroll

// const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.add("shrink");
});

//Change header behaviour based on scrolling position

window.addEventListener("scroll", function () {
  const scrollPos = 0;
  if (document.body.getBoundingClientRect().top === scrollPos) {
    document.querySelector(".navbar").classList.remove("shrink");
  }
});
