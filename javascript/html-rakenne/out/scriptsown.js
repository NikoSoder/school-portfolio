"use strict";
const body = document.body;
const wrapper = document.createElement("main");
// header
const header = document.createElement("header");
header.classList.add("ylatunniste");
const h1 = document.createElement("h1");
const paraFirst = document.createElement("p");
const h1Text = document.createTextNode("Tämä on artikkelin otsikko");
h1.appendChild(h1Text);
const paraFirstText = document.createTextNode("Ensimmäinen kappale! Lorem wohewöghewghewgoehigöeowghewögewhgewöoghiew");
paraFirst.appendChild(paraFirstText);
header.appendChild(h1);
header.appendChild(paraFirst);
wrapper.appendChild(header);
// section
const section = document.createElement("section");
section.classList.add("rinnakkain");
const paraSecond = document.createElement("p");
const paraSecondText = document.createTextNode("Loegoewgpewhgwpghöewögiewghewöighweöiogweweölghweglwehgöewhgewöhgelghlgelgöhewlgejwhgewöghewgöewgh");
paraSecond.appendChild(paraSecondText);
const figure = document.createElement("figure");
const img = document.createElement("img");
img.classList.add("kuvanpaikka");
img.src = "images/javascript-powered-multichannel.gif";
figure.appendChild(img);
section.appendChild(paraSecond);
section.appendChild(figure);
wrapper.appendChild(section);
// footer
const date = new Date();
const current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
const footer = document.createElement("footer");
const paraThird = document.createElement("p");
const paraThirdText = document.createTextNode(`@${current_date} Niko Söder`);
paraThird.appendChild(paraThirdText);
footer.appendChild(paraThird);
wrapper.appendChild(footer);
body.appendChild(wrapper);
