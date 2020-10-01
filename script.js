    //ajout d'une fonction anonyme qui s'execute au chargement de la page
(function() { 
    //ciblage de l'objet cad le header que l'on stocke dans la variable objHead
    let objHead = document.querySelector("#myHeader");
    // calcul de la position du header par rapport à la propriété offset que l'on stocke dans la variable memoPositionHeader
    // offsettop renvoie la distance entre l'element courant cad le header et le haut du noeud
    let memoPositionHeader = objHead.offsetTop;
    function sticky(){
      // declaration de la variable sticky comprenant :
      // position du curseur au scroll calculé grâce à la propriété pageYoffset
      // prpriété YOffset retourne la position actuelle du curseur du document courant scrollé à partir du coin haut gauche
      var posCurseur = this.pageYOffset;
      //le this. se refere à l'objet sur lquel la methodes est appkiqué ici pageYOffest sur fonction sticky
      // je teste la différence de distance entre le scroll et la postion du header
      if(memoPositionHeader-posCurseur<1){
        objHead.style.position = "fixed";
        objHead.style.top = 0;
        objHead.style.zIndex = 999; // ordre et couverture d'un element sur l'autre
      }
      if(posCurseur<101){
        objHead.style.position = "relative";
      }
    }
    // ajout d'un evenement sur la fenetre lors du scroll la fonction sticky est appelée
    window.addEventListener("scroll", sticky);
  })()

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