document.addEventListener("DOMContentLoaded", () => {

  // APPLY THEME FIRST (IMPORTANT)
  applyTheme();

  fetch("./Components/Header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      initHeader();
    });

  fetch("./Components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

});

function applyTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}

function initHeader() {

  // DARK MODE
  const mode = document.querySelector(".mode");

  if (mode) {
    mode.onclick = () => {
      document.body.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    };
  }

  // DROPDOWN
  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();

      const parent = btn.parentElement;

      document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== parent) d.classList.remove("active");
      });

      parent.classList.toggle("active");
    };
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("active");
    });
  });

  // MOBILE MENU
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.onclick = () => menu.classList.toggle("active");
  }
}