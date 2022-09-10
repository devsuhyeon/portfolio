'use strict';

// Handle click on contact me button on the home section
const contactMeBtn = document.querySelector('.home__contact');
contactMeBtn.addEventListener('click', () => {
  const scrollTo = document.querySelector('#contact');
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
