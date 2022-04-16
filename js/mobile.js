const modal = document.getElementById('myModal');
const btn = document.getElementById('navbar_modal');
const flexUl = document.getElementsByClassName('flex_ul')[0];
const span = document.getElementsByClassName('close')[0];

const projectModal = document.getElementById('projects_modal');
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
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window/0',
  link_to_live: 'https://principles31.github.io/portfolio/0',
},
{
  name: 'Multi-Post Stories',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_2.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window/1',
  link_to_live: 'https://principles31.github.io/portfolio/1',
},
{
  name: 'Tonic',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_3.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window/2',
  link_to_live: 'https://principles31.github.io/portfolio/2',
},
{
  name: 'Multi-Post Stories',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_4.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window/3',
  link_to_live: 'https://principles31.github.io/portfolio/3',
},
{
  name: 'Tonic',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_5.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window/4',
  link_to_live: 'https://principles31.github.io/portfolio/4',
},
{
  name: 'Multi-Post Stories',
  description: 'Take a look of my works. If you like what you see and have a project you need coded',
  featured_image: 'img/work_6.png',
  technologies: ['Html', 'CSS', 'Javascript'],
  link_to_source: 'https://github.com/principles31/portfolio/tree/portfolio_popup_window/5',
  link_to_live: 'https://principles31.github.io/portfolio/5',
}];

let count = 0;
function projectloop(prlist) {
  document.getElementsByClassName('pr')[count].textContent = prlist.name;
  let ht = 0;
  let cs = 0;
  let jst = 0;
  [ht, cs, jst] = prlist.technologies;
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

function plfunction(e) {
  let prnum = parseInt(e.currentTarget.id);
  let prchoose = projectlist1[prnum];
  document.getElementsByClassName('m_header')[0].textContent = prchoose.name;
  let ht = 0;
  let cs = 0;
  let jst = 0;
  [ht, cs, jst] = prchoose.technologies;
  document.getElementsByClassName('m_html')[0].textContent = ht;
  document.getElementsByClassName('m_css')[0].textContent = cs;
  document.getElementsByClassName('m_jvt')[0].textContent = jst;
  document.getElementsByClassName('m_content')[0].textContent = prchoose.description;
  document.getElementsByClassName('m_content')[0].href = prchoose.description;
  document.getElementsByClassName('live')[0].href = prchoose.link_to_live;
  document.getElementsByClassName('source')[0].href = prchoose.link_to_source;
  const pc = prchoose.featured_image;
  document.getElementById('project_img_1').src = pc;
  document.getElementById('project_img_2').src = pc;
  document.getElementById('project_img_3').src = pc;
  document.getElementById('project_img_4').src = pc;
  document.getElementById('project_img_0').src = pc;
  projectshowmodal();
}

function projecthidemodal() {
  projectModal.style.display = 'none';
}

const pr1 = document.getElementById('0');
const pr2 = document.getElementById('1');
const pr3 = document.getElementById('2');
const pr4 = document.getElementById('3');
const pr5 = document.getElementById('4');
const pr6 = document.getElementById('5');

pr1.addEventListener('click', plfunction);
pr2.addEventListener('click', plfunction);
pr3.addEventListener('click', plfunction);
pr4.addEventListener('click', plfunction);
pr5.addEventListener('click', plfunction);
pr6.addEventListener('click', plfunction);

projectlist1.forEach(projectloop);
// projectLink.forEach(plfunction);
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