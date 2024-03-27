/***********cv**********/
  // Animation pour le clignotement du CV
  document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.cv .circle-white-dashed');
    const cvLink = document.querySelector('.cv a');
  
    let cvAnimation = null;
  
    function startCvAnimation() {
        cvAnimation = anime.timeline({loop: true})
            .add({
                targets: '.cv',
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 400,
            })
            .add({
                targets: '.cv',
                opacity: [1, 0],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: 2000,
            });
    }
  
    function stopCvAnimation() {
        if (cvAnimation) {
            cvAnimation.pause();
        }
    }
  
    let circleAnimation = null;
  
    function startCircleAnimation() {
        circleAnimation = anime({
            targets: circle,
            rotateZ: 360,
            duration: 10000,
            easing: "linear",
            loop: true
        });
    }
  
    function stopCircleAnimation() {
        if (circleAnimation) {
            circleAnimation.pause();
        }
    }
  
    // Démarrer l'animation du CV lorsque la souris entre dans la zone du CV
    cvLink.addEventListener('mouseenter', startCvAnimation);
    // Arrêter l'animation du CV lorsque la souris quitte la zone du CV
    cvLink.addEventListener('mouseleave', stopCvAnimation);
  
    // Démarrer l'animation du cercle lorsque la souris entre dans la zone du cercle
    cvLink.addEventListener('mouseenter', startCircleAnimation);
    // Arrêter l'animation du cercle lorsque la souris quitte la zone du cercle
    cvLink.addEventListener('mouseleave', stopCircleAnimation);
  });
  
  
/**************fusée***************/
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }
  }, {
    threshold: 0.5
  });

  const rocketElement = document.getElementById('rocket');

  if (rocketElement) {
    observer.observe(rocketElement);
  } else {
    console.error("L'élément avec l'ID 'rocket' n'a pas été trouvé.");
  }
});



