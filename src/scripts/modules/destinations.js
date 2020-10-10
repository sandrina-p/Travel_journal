import destinationsList from "../destinationList.js";
import events from "./pubsub.js";

// Create  and display destination lists

// Set the "shared" variables among different methods:
let buttons;
let visited;
let bucketlist;
let all;
let gallery;
let activeBtn;

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
  document.addEventListener("DOMContentLoaded", setActive);
  document.addEventListener("scroll", shrinkNav);
  window.addEventListener("scroll", restoreNav);

  events.subscribe("destinationAdded", (newItem) => {
    const elDestination = renderDestination(newItem);
    gallery.appendChild(elDestination);
  });
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
  figcaption.setAttribute("data-id", `${destination.id}-${destination.city}`);
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

  // events.subscribe("destinationAdded", addDestination);

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
  //set visited as the default active button on page load
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

const module = { init };
export default module;
