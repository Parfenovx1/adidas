const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const info = document.querySelector(".info h3");
const sizes = document.querySelector(".size");

container.addEventListener("mousemove", (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (event) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-385deg)";
  purchase.style.transform = "translateZ(40px)";
  info.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(185px)";
});

container.addEventListener("mouseleave", (event) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  purchase.style.transform = "translateZ(0px)";
  info.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
