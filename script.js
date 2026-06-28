const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section,.card,.work").forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

document.querySelectorAll(".button").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.background=`radial-gradient(circle at ${x}px ${y}px,#66b2ff,#2d8cff)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="#2d8cff";

});

});

window.addEventListener("scroll",()=>{

document.body.style.backgroundPosition=`0 ${window.scrollY*0.2}px`;

});