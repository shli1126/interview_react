const API_URL = "https://jsonplaceholder.typicode.com/users";

const tbodyEl = document.getElementById("tbody");

function renderUsers(users) {
  users.forEach((user) => {
    const tr = document.createElement("tr");
    const columns = ["id", "name", "username", "email", "phone", "website"];

    columns.forEach((key) => {
      const td = document.createElement("td");

      if (key === "website") {
        const link = document.createElement("a");
        link.href = `https://${user[key]}`;
        link.textContent = user[key];
        link.target = "_blank";
        td.appendChild(link);
      } else {
        td.textContent = user[key];
      }

      tr.appendChild(td);
    });

    tbodyEl.appendChild(tr);
  });
}

async function loadUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error(error);
  }
}

loadUsers();
