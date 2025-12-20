const BASE = "https://jsonplaceholder.typicode.com";

const input = document.getElementById("userIdInput");
const btn = document.getElementById("searchBtn");
const statusEl = document.getElementById("status");
const results = document.getElementById("results");
const userList = document.getElementById("userList");
const postsList = document.getElementById("postsList");
const todosList = document.getElementById("todosList");


function li(text) {
  const el = document.createElement("li");
  el.textContent = text;
  return el;
}

async function search() {
  const id = Number(input.value.trim());

  statusEl.textContent = "Loading...";

  const [u, p, t] = await Promise.allSettled([
    fetch(`${BASE}/users/${id}`).then(r => r.ok ? r.json() : null),
    fetch(`${BASE}/posts?userId=${id}`).then(r => r.json()),
    fetch(`${BASE}/todos?userId=${id}`).then(r => r.json()),
  ]);

  if (!u.value || !u.value.id) {
    statusEl.textContent = "User was not found. Please try another user ID";
    statusEl.className = "error";
    input.value = "";
    return;
  }

  statusEl.textContent = "";

  Object.entries(u.value).forEach(([k, v]) =>
    userList.appendChild(li(`${k}: ${JSON.stringify(v)}`))
  );

  (p.value || []).forEach(item =>
    postsList.appendChild(li(Object.entries(item).map(([k,v]) => `${k}: ${v}`).join(" | ")))
  );

  (t.value || []).forEach(item =>
    todosList.appendChild(li(Object.entries(item).map(([k,v]) => `${k}: ${v}`).join(" | ")))
  );
}

btn.addEventListener("click", search);
input.addEventListener("keydown", e => e.key === "Enter" && search());
