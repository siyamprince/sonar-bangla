
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
