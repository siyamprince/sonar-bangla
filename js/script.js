
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

const navBar = document.querySelector('.navbar');

window.addEventListener("scroll", function(){
    navBar.classList.toggle("sticky", window.scrollY > 0);
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

