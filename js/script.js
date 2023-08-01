
//=============== navigation ======================

const menuBtn = document.querySelector('.menu-bar');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-links');
const closeBtns = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

closeBtns.addEventListener("click", () => {
    navigation.classList.remove('active');
    menuBtn.classList.remove('active');
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        navigation.classList.remove('active');
        menuBtn.classList.remove('active');
    })
})

const header = document.querySelector('.header');

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});


//============= slider background images

const btns = document.querySelectorAll(".slider-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderBack = function(menual){

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[menual].classList.add("active");
    slides[menual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderBack(i);
    });
});


// ======== auto play slider ============

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove("active");
            });

            slides[i].classList.add("active");
            btns[i].classList.add("active");
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();


// =================== card swiper ==================

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });


  /*=========== counter =============*/

let valueDisplays = document.querySelectorAll('.counter-number');
let interval = 10000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent = startValue;
        if (startValue==endValue){
            clearInterval(counter);
        }
    }, duration);
});