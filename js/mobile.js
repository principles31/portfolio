let modal = document.getElementById('myModal');
let btn = document.getElementById('navbar_modal');
let flex_ul = document.getElementsByClassName('flex_ul')[0];
let span = document.getElementsByClassName('close')[0];

btn.addEventListener('click', function () {
  modal.style.display = 'block';
  flex_ul.style.display = 'block';
  event.preventDefault();
});

flex_ul.addEventListener("click", function () {
  modal.style.display = "none";
  flex_ul.style.display = "none";
});

span.onclick = function () {
  modal.style.display = 'none';
  flex_ul.style.display = 'none';
};
