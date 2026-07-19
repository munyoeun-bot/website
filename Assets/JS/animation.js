const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight - 120;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
});
// text pop
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.2});

cards.forEach(card => observer.observe(card));
// slider
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// dots
slide.forEach((_,i)=>{
  const dot = document.createElement("span");
  dot.onclick=()=>go(i);
  dotsContainer.appendChild(dot);
});

const dots=document.querySelectorAll(".dots span");

function update(){
  slides.style.transform=`translateX(-${index*100}%)`;

  dots.forEach(d=>d.classList.remove("active"));
  dots[index].classList.add("active");
}

function go(i){
  index=i;
  update();
}

// nav
next.onclick=()=>{
  index=(index+1)%slide.length;
  update();
};

prev.onclick=()=>{
  index=(index-1+slide.length)%slide.length;
  update();
};

// auto
// setInterval(()=>{
//   index=(index+1)%slide.length;
//   update();
// },);

// update();