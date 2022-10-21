"use strict";
function showPic(pic) {
    var _a;
    const source = (_a = pic.getAttribute("href")) !== null && _a !== void 0 ? _a : "#";
    const placeholder = document.getElementById("placeholder");
    placeholder === null || placeholder === void 0 ? void 0 : placeholder.setAttribute("src", source);
    const text = pic.getAttribute("title");
    const description = document.getElementById("description");
    if (!description)
        return;
    if (!description.firstChild)
        return;
    description.firstChild.nodeValue = text;
}
