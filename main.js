const items = document.getElementsByClassName("fade-list");

for (let i = 0; i < items.length; ++i) {
  fadeIn(items[i], i * 150);
}
function fadeIn(item, delay) {
  setTimeout(() => {
    item.classList.add("fadein");
  }, delay);
}
