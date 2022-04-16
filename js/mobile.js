const modal = document.getElementById('myModal');
const btn = document.getElementById('navbar_modal');
const flexUl = document.getElementsByClassName('flex_ul')[0];
const span = document.getElementsByClassName('close')[0];

const projectModal = document.getElementById('projects_modal');
const projectLink = document.querySelectorAll('.project_click_class');
const close2 = document.getElementsByClassName('close2')[0];

// When the user clicks on the button, open the modal
function showmodal(e) {
  modal.style.display = 'block';
  flexUl.style.display = 'block';
  e.preventDefault();
}

btn.addEventListener('click', showmodal);
function hideModal() {
  modal.style.display = 'none';
  flexUl.style.display = 'none';
}

flexUl.addEventListener('click', hideModal);
span.addEventListener('click', hideModal);

const projectlist1 = [{
  name: 'Tonic',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_1.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window',
  link_to_live: 'https://principles31.github.io/portfolio/',
},
{
  name: 'Multi-Post Stories',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_2.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window',
  link_to_live: 'https://principles31.github.io/portfolio/',
},
{
  name: 'Tonic',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_3.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window',
  link_to_live: 'https://principles31.github.io/portfolio/',
},
{
  name: 'Multi-Post Stories',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_4.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window',
  link_to_live: 'https://principles31.github.io/portfolio/',
},
{
  name: 'Tonic',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_5.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window',
  link_to_live: 'https://principles31.github.io/portfolio/',
},
{
  name: 'Multi-Post Stories',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_6.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window',
  link_to_live: 'https://principles31.github.io/portfolio/',
}];

let count = 0;
function projectloop(prlist) {
  document.getElementsByClassName('pr')[count].textContent = prlist.name;
  const ht = 0;
  const cs = 0;
  const jst = 0;
  [ht, cs, jst] = prlist['technologies'];
  document.getElementsByClassName('htm')[count].textContent = ht;
  document.getElementsByClassName('cs')[count].textContent = cs;
  document.getElementsByClassName('jvt')[count].textContent = jst;
  const pc = 'url('.concat(prlist.featured_image, ')');
  document.getElementsByClassName('g_p')[count].style.backgroundImage = pc;
  count += 1;
}

function projectshowmodal() {
  projectModal.style.display = 'block';
}

function plfunction(pl) {
  pl.addEventListener('click', projectshowmodal);
}

function projecthidemodal() {
  projectModal.style.display = 'none';
}

projectlist1.forEach(projectloop);
projectLink.forEach(plfunction);
close2.addEventListener('click', projecthidemodal);

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const errorMsg = document.getElementsByClassName('error_msg')[0];
function validateemail(event) {
  const emailstr = (email.value).split('@')[0];
  if (emailstr !== emailstr.toLowerCase()) {
    errorMsg.style.display = 'block';
    event.preventDefault();
  }
}
form.addEventListener('submit', validateemail);