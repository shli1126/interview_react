const title = document.getElementById("main-title");
title.style.color = "red";

const lst = document.getElementsByClassName("item")[0];

const lstItems = document.getElementsByTagName("li");

if (lstItems.length > 0) {
  lstItems[0].style.border = "2px dotted red";
}

const firstItem = document.querySelector(".item");
firstItem.textContent += "This is added Content";

const allItems = document.querySelectorAll(".item");

allItems.forEach((p) => (p.style.fontStyle = "italic"));

document.querySelector(".add-btn").addEventListener("click", () => {
  const ul = document.querySelector(".item-list");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item" + (ul.children.length + 1);
  newItem.className = "item";
  ul.prepend(newItem);
});

document.querySelector(".item-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    event.target.remove();
  }
});
