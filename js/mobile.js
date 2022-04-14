// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("navbar_modal");
var flex_ul = document.getElementsByClassName("flex_ul")[0];
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

  // When th/e user clicks on the button, open the modal
  btn.addEventListener("click", function() {
    modal.style.display = "block";
    flex_ul.style.display = "block";
    
    event.preventDefault();
  });



  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    flex_ul.style.display = "none";
    
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      flex_ul.style.display = "none";
    }
  }
