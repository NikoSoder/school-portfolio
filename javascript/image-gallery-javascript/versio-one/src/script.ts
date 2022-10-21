function showPic(pic: HTMLAnchorElement) {
  const source = pic.getAttribute("href") ?? "#";
  const placeholder = document.getElementById("placeholder");
  placeholder?.setAttribute("src", source);
  const text = pic.getAttribute("title");
  const description = document.getElementById("description");
  if (!description) return;
  if (!description.firstChild) return;
  description.firstChild.nodeValue = text;
}
