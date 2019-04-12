function myFunction() {
  let x = document.querySelector(".navlink");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function(){
  
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
      
      event.preventDefault();

      
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        
        window.location.hash = hash;
      });
    } 
  });
});