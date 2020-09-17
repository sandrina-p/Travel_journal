import moment from "moment";
import destinationsList from "./scripts/destinationList.js";

//get list of urls
const getURL = (destinationsList) => {
  let url = destinationsList.map((obj) => obj.photo.valueOf());
  return url;
};

//create elements for each city
destinationsList.forEach((destination) => {
  //img wrapper
  const createImg = () => {
    let figure = document.createElement("figure");
    figure.classList.add("img-container");
    //img element
    let img = document.createElement("img");
    img.style.objectFit = "cover";
    document.querySelector(".gallery").appendChild(figure);
    figure.appendChild(img);
    //img caption
    let figcaption = document.createElement("figcaption");
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

    //urls
    img.src = destination.photo;

    //add classes
    if (destination.visited === true) {
      figure.classList.add("visited");
    } else {
      figure.classList.add("bucketlist");
    }
  };

  return createImg(getURL(destinationsList));
});

//connect lists and buttons

//get buttons
const visitedButton = document.querySelector(".button__visited");
const bucketlistButton = document.querySelector(".button__buckelist");
const allButton = document.querySelector(".button__all");
//get all .gallery items
const galleryList = document.querySelector(".gallery");

//set .visited as default active button
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

(function () {
  const buttons = {
    init: function () {
      this.cacheDom();
      this.bindEvents();
      // this. render();
    },
    cacheDom: function () {
      this.buttons = document.querySelector(".buttons");
      this.visited = this.buttons.find(".button__visited");
      this.bucketlist = this.buttons.find(".button__bucketlist");
      this.all = this.buttons.find(".button__all");
      this.gallery = document.querySelector(".gallery");
    },
    bindEvents: function () {
      this.visited.addEventListener("click", () => {
        this.addVisited.bind(this);
      });
      this.bucketlist.addEventListener("click", () => {
        this.addBucketlist.bind(this);
      });
      this.visited.contains(".bucketlist").addEventListener("click", () => {
        this.removeBucketlist.bind(this);
      });
      this.bucketlist.contains(".visited").addEventListener("click", () => {
        this.removeVisited.bind(this);
      });
    },

    addVisited: function () {
      this.gallery.classList.add("visited");
    },
    addBucketlist: function () {
      this.gallery.classList.add("bucketlist");
    },
    removeVisited: function () {
      this.gallery.classList.remove("visited");
    },
    removeBucketlist: function () {
      this.gallery.classList.remove("bucketlist");
    },
  };
  buttons.init();
})();

//shrink header on scroll

const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  navbar.classList.add("shrink");
});

//Change header behaviour based on scrolling position
let scrollPos = 0;

window.addEventListener("scroll", function () {
  if (document.body.getBoundingClientRect().top === scrollPos) {
    document.querySelector(".navbar").classList.remove("shrink");
  }
});
