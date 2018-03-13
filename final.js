function myFunction() {
    var x = document.getElementById("myCate");
    if (x.className === "Categories") {
        x.className += " responsive";
    } else {
        x.className = "Categories";
    }
    var y = document.getElementById("myCursor");
    if (y.className === "prev") {
        y.className += " responsive";
    } else {
        y.className = "prev";
    }
    var z = document.getElementById("myCursor2");
    if (z.className === "next") {
        z.className += " responsive";
    } else {
        z.className = "next";
    }
    window.scrollTo(0 , 0);
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}