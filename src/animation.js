/***********cv**********/
  // Animation pour le clignotement du CV
  document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.cv .circle-white-dashed');
    const cvLink = document.querySelector('.cv a');
  
    let circleAnimation = null;
  
    function startCircleAnimation() {
        circleAnimation = anime({
            targets: circle,
            rotateZ: 360,
            duration: 5000,
            easing: "linear",
            loop: true
        });
    }
  
    function stopCircleAnimation() {
        if (circleAnimation) {
            circleAnimation.pause();
        }
    }
  
  
    // Démarrer l'animation du cercle lorsque la souris entre dans la zone du cercle
    cvLink.addEventListener('mouseenter', startCircleAnimation);
    // Arrêter l'animation du cercle lorsque la souris quitte la zone du cercle
    cvLink.addEventListener('mouseleave', stopCircleAnimation);
  });
  
  
/**************fusée***************/
document.addEventListener('DOMContentLoaded', function() {
  const rocketElement = document.getElementById('rocket');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        rocketElement.style.display = 'block'; // Afficher la fusée lorsque l'élément est dans la vue
        rocketElement.style.animation = 'appearFromLeft 2s ease-out forwards'; // Déclencher l'animation d'apparition
      }
    });
  }, {
    threshold: 0.5 // Déclencher lorsque l'élément est légèrement visible dans la fenêtre
  });

  observer.observe(rocketElement);
});


