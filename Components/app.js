const language = {

    kh: {

        title:
        "សាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ",

        text:
        "វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍",

        homeLink:
        "ទំព័រដើម"
    },

    en: {

        title:
        "Chea Sim Komchaymear National University",

        text:
        "Community Development Institute",

        homeLink:
        "Home Page"
    }

};

function setLanguage(lang){

    localStorage.setItem("lang", lang);

    document.getElementById("title").innerText =
    language[lang].title;

    document.getElementById("text").innerText =
    language[lang].text;

    document.getElementById("homeLink").innerText =
    language[lang].homeLink;
}

// auto load
let savedLang =
localStorage.getItem("lang") || "kh";

document.getElementById("language").value =
savedLang;

setLanguage(savedLang);