const langBtn = document.querySelector(".lang-btn");

if (langBtn) {

  // LOAD SAVED LANGUAGE
  if (localStorage.getItem("language") === "en") {

    document.body.classList.add("english");

    langBtn.innerHTML = "KH";

    document.documentElement.lang = "en";

  }

  // TOGGLE LANGUAGE
  langBtn.addEventListener("click", () => {

    document.body.classList.toggle("english");

    const isEnglish =
      document.body.classList.contains("english");

    // SAVE LANGUAGE
    localStorage.setItem(
      "language",
      isEnglish ? "en" : "km"
    );

    // CHANGE BUTTON
    langBtn.innerHTML = isEnglish ? "KH" : "EN";

    // HTML LANG
    document.documentElement.lang =
      isEnglish ? "en" : "km";

  });

}