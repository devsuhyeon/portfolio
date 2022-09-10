'use strict';

// Handle click on contact me button on the home section
const contactMeBtn = document.querySelector('.home__contact');
contactMeBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Show arrow up button when scrolling down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const arrowUpBtn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtn.classList.add('visible');
  } else {
    arrowUpBtn.classList.remove('visible');
  }
});

// Handle click on arrow up button
arrowUpBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
