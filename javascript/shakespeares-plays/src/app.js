"use strict";
let genres = document.querySelectorAll(".genre-ul");
let mainUl = document.querySelector(".main-ul");
let aTags = document.querySelectorAll("a");
let tablePlays = document.getElementById("table-plays");
let tableSonnets = document.getElementById("table-sonnets");
genres.forEach((genre) => {
    genre.classList.add("ul-style");
});
mainUl === null || mainUl === void 0 ? void 0 : mainUl.classList.add("display-flex");
function linkIsExternal(link_element) {
    return link_element.host !== window.location.host;
}
aTags.forEach((aElement) => {
    aElement.classList.add("a-style");
    let pdf = aElement.href.substring(aElement.href.length - 3);
    let href = aElement.href;
    //console.log(href.slice(0, 6));
    if (href.includes("mailto:henryIV@buckingham.co.uk")) {
        let iElement = document.createElement("i");
        iElement.classList.add("fa-solid", "fa-envelope");
        iElement.style.paddingLeft = "1rem";
        aElement.appendChild(iElement);
    }
    if (pdf === "pdf") {
        let iElement = document.createElement("i");
        iElement.classList.add("fa-solid", "fa-file-pdf");
        iElement.style.paddingLeft = "1rem";
        aElement.appendChild(iElement);
    }
    if (linkIsExternal(aElement)) {
        let iElement = document.createElement("i");
        iElement.classList.add("fa", "fa-external-link");
        aElement.appendChild(iElement);
        iElement.style.color = "green";
        iElement.style.paddingLeft = "1rem";
    }
});
tablePlays === null || tablePlays === void 0 ? void 0 : tablePlays.classList.add("table-first");
tableSonnets === null || tableSonnets === void 0 ? void 0 : tableSonnets.classList.add("table-second");
