document.querySelector(".tab").addEventListener("click", function (e) {
  if (!e.target.classList.contains("tablinks")) return;

  const cityName = e.target.dataset.city;

  // hide all tab content
  document.querySelectorAll(".tabcontent").forEach((tab) => {
    tab.style.display = "none";
  });

  // remove active class from all buttons
  document.querySelectorAll(".tablinks").forEach((btn) => {
    btn.classList.remove("active");
  });

  // show selected tab
  document.getElementById(cityName).style.display = "block";
  e.target.classList.toggle("active");
});
