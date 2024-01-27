// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// Change Navbar Style On Scroll

window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle
    ('window-scroll',window.scrollY >0)
});


// Show/Hide faq answer
let Faqs = document.querySelectorAll(".faq");
Faqs.forEach(faq =>{
    faq.addEventListener("click",function(){
        faq.classList.toggle("open");

        let icon = faq.querySelector(".faq__icon i");
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus";
        }else{
            icon.className = "fa-solid fa-plus";
        }
    })
})


// Swiper Js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //when window width is >= 600px
    breakpoints:{
        600:{
            slidesPerView:2
        }
    }
  });


// Nav Menu  
let Open = document.getElementById("open-menu-btn");
let Close = document.getElementById("close-menu-btn");
let Menu = document.querySelector(".nav__menu");

Open.addEventListener("click",()=>{
    Menu.style.display = "flex";
    Close.style.display = "block";
    Open.style.display = "none";
});
Close.addEventListener("click",()=>{
    Menu.style.display = "none";
    Close.style.display = "none";
    Open.style.display = "block";
});