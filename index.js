const follower = document.getElementById('follower');

document.addEventListener('mousemove', (e) => {
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

console.log("JAVASCRIPT IS WORKING HORRAY 🥲");
'use strict';

const carouselItems = document.querySelectorAll('.carousel-item');
const navItems = document.querySelectorAll('.nav-item');
const nav = document.querySelector('.carousel-nav');

nav.addEventListener('click', function (e) {
    if (!e.target.classList.contains('nav-item')) return;

    const clickedDot = e.target;
    const activeDot = document.querySelector('.nav-item.active');

    if (clickedDot === activeDot) return;

    const newIndex = Array.from(navItems).indexOf(clickedDot);
    const activeIndex = Array.from(navItems).indexOf(activeDot);

    carouselItems[activeIndex].classList.remove('active');
    activeDot.classList.remove('active');

    carouselItems[newIndex].classList.add('active');
    clickedDot.classList.add('active');
});