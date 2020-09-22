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
