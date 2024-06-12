const container = document.getElementById("container");

const heading3 = document.querySelector("h3");

container.addEventListener("mouseenter", (event) => {
  heading3.textContent = "This is mouseenter";
});

container.addEventListener("mouseleave", (event) => {
  console.log(event);

  heading3.textContent = "This is mouseleave";
});

container.addEventListener("mouseout", (event) => {
  heading3.textContent = "This is  mouseout";
});

container.addEventListener("mouseover", (event) => {
  heading3.textContent = "This is  mouseover";
});

container.addEventListener("mouseup", (event) => {
  heading3.textContent = " This is mouseup";
});

container.addEventListener("mousedown", (event) => {
  heading3.textContent = " This is mousedown";
});

window.addEventListener("keydown", (event) => {
  console.log(event.key);
});

window.addEventListener("keyup", (event) => {
  console.log(event.key);
});

let detailsOfPerson = {
  name: "Divya",
  education: "bsc",
  group: "datascience",
  year: "final year",
};

let result = JSON.stringify(group);

let localStorageData = localStorage.getItem("myInfo", result);
let personObj = JSON.parse(localStorageData);
localStorage.clear();
localStorage.removeItem("myInfo");
