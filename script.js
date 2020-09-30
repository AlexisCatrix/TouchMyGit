    //creation d'une fonction anonyme qui s'execute au chargement de la page
(function() { 
    // on cible l'objet cad le header que l'on stocke dans la variable objNav
    let objNav = document.querySelector("#myHeader");
    // on mémorise la position de header que l'on stocke dans la variable memoPositionHeader
    // offsettop renvoie la distance entre l'element courant cad le header et le haut du noeud
    let memoPositionHeader = objNav.offsetTop;
    function sticky(){
      // position du curseur au scroll 
      //The pageYOffset properties returns the pixels the current document has been scrolled from the upper left corner of the window vertically.
      var posCurseur = this.pageYOffset;
      // je teste la différence de distance entre le scroll et header
      if(memoPositionHeader-posCurseur<1){
        objNav.style.position = "fixed";
        objNav.style.top = 0;
        objNav.style.zIndex = 999;
      }
      if(posCurseur<101){
        objNav.style.position = "relative";
      }
    }
    // evenement
    window.addEventListener("scroll", sticky);
  })()