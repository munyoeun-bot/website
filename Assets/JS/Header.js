const modeBtn = document.querySelector(".mode");

if (modeBtn) {

  // set icon ពេល load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    modeBtn.innerHTML = "☀️";
  } else {
    modeBtn.innerHTML = "🌙";
  }
  //load all page
  const btn = document.getElementById("btn");

/* LOAD theme when page open */
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

/* CLICK toggle */
btn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

};

  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    // change icon
    modeBtn.innerHTML = isDark ? "☀️" : "🌙";
  });
}
/*dark mode store*/
// check saved mode when page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// toggle button
const modeBtn = document.querySelector(".mode");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // save mode
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
    /* LANGUAGE SWITCH */
