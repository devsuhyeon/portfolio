'use strict';

// Make navbar transparent when it is on the top of the page
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle click on navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (!link) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Handle navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

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

// Handle project to be activated
const projects = document.querySelectorAll('.project');
projects[0].classList.add('active'); // Initially, the first project is active
let activeProject = projects[0];

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeProject.classList.remove('active'); // Remove active class from existing active project
      activeProject = entry.target;
      activeProject.classList.add('active'); // Add active class to new target project
    }
  });
}, options);

projects.forEach((project) => observer.observe(project));
