var figure = document.querySelector("figure");
var h1 = document.querySelector("h1");
var img = document.querySelector("img");
var btn = document.querySelector("button");
figure.addEventListener("mouseover", function () {
    h1.textContent = "Is Brave even Cooler?";
    img.src = "./images/brave-logo.png";
    document.body.style.backgroundColor = "white";
});
figure.addEventListener("mouseout", function () {
    h1.textContent = "Mozilla is cool";
    img.src = "./images/firefox-logo.png";
    document.body.style.backgroundColor = "#ff9500";
});
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    h1.textContent = "Mozilla is cool, Niko";
});
