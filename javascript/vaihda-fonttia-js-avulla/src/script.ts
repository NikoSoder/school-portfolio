const listItems = document.querySelectorAll(
  ".list-item"
) as NodeListOf<HTMLElement>;

const button = document.getElementById("btn");
let count = 1;

function changeFontSize(size: string, font: string) {
  const fontInfo = document.getElementById("font-info");
  const fontFamily = document.getElementById("font-family-info");

  listItems.forEach((item) => {
    item.style.fontSize = size;
    item.style.fontFamily = font;
  });
  count++;
  if (fontInfo) {
    fontInfo.textContent = "Fonttikoko nyt: " + size;
  }
  if (fontFamily) {
    fontFamily.textContent = "Fontti tyyli on nyt " + font;
  }

  if (count === 6) {
    count = 1;
  }
}

button?.addEventListener("click", () => {
  if (count === 1) {
    changeFontSize("20px", "Roboto");
    return;
  }

  if (count === 2) {
    changeFontSize("24px", "Mansalva");
    return;
  }

  if (count === 3) {
    changeFontSize("28px", "Grenze");
    return;
  }

  if (count === 4) {
    changeFontSize("32px", "Turret-Road");
    return;
  }

  if (count === 5) {
    changeFontSize("16px", "Courier-New,Charcoal,sans-serif");
    return;
  }
});
