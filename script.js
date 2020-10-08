let headerOpa = document.querySelector('#myHeader');

  document.addEventListener('scroll', () => {
    if (window.scrollY > 0){
    headerOpa.classList.add('headerDownAnima');
    } else if (window.scrollY <= 0){
    headerOpa.classList.remove('headerDownAnima');
    }
  });

  //Carousel//



  var slideIndex = 1;
  showSlides(slideIndex);

  //Controles suivant et précédent//

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  //Controle des images//
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides_fade");
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