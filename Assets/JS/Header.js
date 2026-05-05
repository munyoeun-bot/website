// NAV SHRINK
const nav = document.getElementById("nav");

if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("shrink", window.scrollY > 50);
  });
}


// DROPDOWN
document.querySelectorAll(".dropdown-toggle").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const parent = btn.closest(".dropdown");

    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("active");
    });

    parent.classList.toggle("active");
  });
});


// CLOSE WHEN CLICK OUTSIDE
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("active");
    });
  }
});


// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}


// DARK MODE
const modeBtn = document.querySelector(".mode");

if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save mode
    localStorage.setItem("theme", 
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Load saved mode
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}