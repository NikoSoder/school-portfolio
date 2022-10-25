let figure = document.querySelector("figure") as HTMLElement;
let h1 = document.querySelector("h1") as HTMLElement;
let img = document.querySelector("img") as HTMLImageElement;
let btn = document.querySelector("button");

figure.addEventListener("mouseover", () => {
  h1.textContent = "Is Brave even Cooler?";
  img.src = "./images/brave-logo.png";
  document.body.style.backgroundColor = "white";
});

figure.addEventListener("mouseout", () => {
  h1.textContent = "Mozilla is cool";
  img.src = "./images/firefox-logo.png";
  document.body.style.backgroundColor = "#ff9500";
});

btn?.addEventListener("click", () => {
  h1.textContent = "Mozilla is cool, Niko";
});
