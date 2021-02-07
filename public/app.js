// Calling Dom Elements
const container = document.querySelector(".container");
const card = document.querySelector(".card");
// items
const sneaker = document.querySelector(".image img");
const heading = document.querySelector(".heading h1");
const details = document.querySelector(".details p");
const sizes = document.querySelector(".buttons");
const purchase = document.querySelector(".purchase button");

// Moving Animations
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 8;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 8;

  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // setting items z index

  sneaker.style.transform = "translateZ(80px)";
  heading.style.transform = "translatez(50px)";
  details.style.transform = "translatez(50px)";
  sizes.style.transform = "translatez(50px)";
  purchase.style.transform = "translatez(50px)";
});

// Animate Our
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "All 0.25s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //   reseting items z index
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  heading.style.transform = "translatez(0px)";
  details.style.transform = "translatez(0px)";
  sizes.style.transform = "translatez(0px)";
  purchase.style.transform = "translatez(0px)";
});
