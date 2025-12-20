const table = document.querySelector("table");
const form = document.querySelector("form");

table.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    const row = event.target.closest("tr");
    if (row) row.remove();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const newRow = document.createElement("tr");
  const { name, category, price } = data;
  [name, category, price].forEach((text) => {
    const td = document.createElement("td");
    td.textContent = text;
    newRow.appendChild(td);
  });

  
  const tdBtn = document.createElement("td");
  tdBtn.style.display = "flex";
  tdBtn.style.justifyContent = "center";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  tdBtn.appendChild(deleteBtn);
  deleteBtn.classList.add("btn");
  newRow.appendChild(tdBtn);
  table.appendChild(newRow);
});
