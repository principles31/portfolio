var modal = document.getElementById('myModal');

var btn = document.getElementById('navbar_modal');
var flex_ul = document.getElementsByClassName('flex_ul')[0];
var span = document.getElementsByClassName('close')[0];

btn.addEventListener('click', function () {
  modal.style.display = 'block';
  flex_ul.style.display = 'block';

  event.preventDefault();
});

span.onclick = function () {
  modal.style.display = 'none';
  flex_ul.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    flex_ul.style.display = 'none';
  }
};
