const nav = document.querySelector('nav');
const mobile_icons = document.querySelector('.mobile-icons');
const hamb = document.querySelector('.hamb');
const close = document.querySelector('.close-icon');
const options = document.querySelector('.mobile-options');
const projects = document.querySelector('#works_section');
const about = document.querySelector('#about_section');
const contact = document.querySelector('#contact_section');
const img1 = document.querySelector('.img-before');
const img2 = document.querySelector('.img-after');

close.style.display = 'none';
options.style.display = 'none';

const toggleOptions = () => {
  if (nav.classList.contains('click-icon')) {
    nav.classList.remove('click-icon');
    close.style.display = 'none';
    hamb.style.display = 'block';
    options.style.display = 'none';
    img1.style.display = 'none';
    img2.style.display = 'none';
  } else {
    nav.classList.add('click-icon');
    close.style.display = 'block';
    hamb.style.display = 'none';
    options.style.display = 'block';
    img1.style.display = 'block';
    img2.style.display = 'block';
  }
};

mobile_icons.addEventListener('click', toggleOptions);
projects.addEventListener('click', toggleOptions);
about.addEventListener('click', toggleOptions);
contact.addEventListener('click', toggleOptions);
