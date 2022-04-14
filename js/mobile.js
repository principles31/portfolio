const modal = document.getElementById('myModal');
const btn = document.getElementById('navbar_modal');
const flexUl = document.getElementsByClassName('flex_ul')[0];
const span = document.getElementsByClassName('close')[0];

btn.addEventListener('click', function showmodal() {
  modal.style.display = 'block';
  flexUl.style.display = 'block';
});

function hideModal() {
  modal.style.display = 'none';
  flexUl.style.display = 'none';
}

flexUl.addEventListener('click', hideModal);
span.addEventListener('click', hideModal);