const anchor = document.querySelector("stylish-anchor");
const image = document.querySelector("shadow-image");

anchor.addEventListener("click", (event) => {
  image.src = "./images/beautiful_flower.jpeg";
});
