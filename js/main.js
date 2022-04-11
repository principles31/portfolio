const nav = document.querySelector('nav');
const mobile_icons = document.query('.mobile-icons');
const hamb = document.querySelector('.hamb');
const close_options = document.querySelector('.close');
const options = document.querySelector('.mobile-options');
const projects = document.querySelector('.works_section');
const about = document.querySelector('.about_section');
const contact = document.querySelector('.contact_section');

close.style.display = 'none';
options.style.display = 'none';

const changeOptions = () => {
    if (nav.classList.contains('click-mobile-icon')) {
      nav.classList.remove('click-mobile-icon');
      closeIcon.style.display = 'none';
      hamburger.style.display = 'block';
      logo.style.display = 'block';
      options.style.display = 'none';
    } else {
      nav.classList.add('click-mobile-icon');
      closeIcon.style.display = 'block';
      hamburger.style.display = 'none';
      logo.style.display = 'none';
      options.style.display = 'block';
    }
  };