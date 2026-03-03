// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// Accordion
document.querySelectorAll(".accordion-header").forEach(header=>{
  header.addEventListener("click",()=>{
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});

// Testimonials
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

document.getElementById("next").onclick = ()=>
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials

  // Accordion
document.querySelectorAll(".accordion-item").forEach(item=>{
  item.addEventListener("click",()=>{

    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";

  });
});

// Testimonials slider
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index){
  slides.forEach(s=>s.classList.remove("active"));
  dots.forEach(d=>d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

document.querySelector(".next").onclick = ()=>{
  current = (current + 1) % slides.length;
  showSlide(current);
};

document.querySelector(".prev").onclick = ()=>{
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

