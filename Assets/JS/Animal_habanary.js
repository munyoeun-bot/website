// const slides = document.querySelector(".slides");
// const slide = document.querySelectorAll(".slide");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");
// const dotsContainer = document.querySelector(".dots");

// let index = 0;

// // dots
// slide.forEach((_,i)=>{
//   const dot = document.createElement("span");
//   dot.onclick=()=>go(i);
//   dotsContainer.appendChild(dot);
// });

// const dots=document.querySelectorAll(".dots span");

// function update(){
//   slides.style.transform=`translateX(-${index*100}%)`;

//   dots.forEach(d=>d.classList.remove("active"));
//   dots[index].classList.add("active");
// }

// function go(i){
//   index=i;
//   update();
// }

// // nav
// next.onclick=()=>{
//   index=(index+1)%slide.length;
//   update();
// };

// prev.onclick=()=>{
//   index=(index-1+slide.length)%slide.length;
//   update();
// };

// // auto
// setInterval(()=>{
//   index=(index+1)%slide.length;
//   update();
// },4500);

// update();