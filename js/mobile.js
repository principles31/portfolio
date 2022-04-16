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


function projectshowmodal(e) {
  projectModal.style.display = 'block';
  e.preventDefault();
}

function projecthidemodal(e) {
  projectModal.style.display = 'none';
  e.preventDefault();
}

projectLink.forEach(function (pl) {
  pl.addEventListener('click', projectshowmodal);
});
close2.addEventListener('click', projecthidemodal);

