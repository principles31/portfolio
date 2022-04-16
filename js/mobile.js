const modal = document.getElementById('myModal');
const btn = document.getElementById('navbar_modal');
const flexUl = document.getElementsByClassName('flex_ul')[0];
const span = document.getElementsByClassName('close')[0];

function showmodal(event) {
  modal.style.display = 'block';
  flexUl.style.display = 'block';
  event.preventDefault();
}

btn.addEventListener('click', showmodal);

function hideModal(event) {
  modal.style.display = 'none';
  flexUl.style.display = 'none';
  event.preventDefault();
}

flexUl.addEventListener('click', hideModal);
span.addEventListener('click', hideModal);

// functionality for local storage
const theForm = document.forms.contactF;
const fullname = theForm.FullName;
const email = theForm.Email;
const message = theForm.Message;

const formData = {
  fullname: '',
  email: '',
  message: '',
};

const setStorageData = () => {
  localStorage.setItem('formData', JSON.stringify(formData));
};

