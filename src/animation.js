/***********cv**********/
document.addEventListener('DOMContentLoaded', function() {
  anime.timeline({loop: true})
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
    })
    anime({
      targets: '.cv .circle-white-dashed',
      rotateZ: 360,
      duration: 10000,
      easing: "linear",
      loop: true
    });
  });
  
/**************fusée***************/
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        animateRocket();
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

function animateRocket() {
  console.log('rocket')
  anime({
    targets: '#rocket',
    translateX: [ 
      { value: '-100vw', duration: 0 }, 
      { value: '0', duration: 2000, easing: 'easeOutQuad' } 
    ],
    translateY: [
      { value: '-100vh', duration: 0 }, 
      { value: '0', duration: 2000, easing: 'easeOutQuad' }
    ],
    opacity: { value: 1, duration: 2000, easing: 'easeOutQuad' }, 
    easing: 'easeOutQuad',
    duration: 2000,
    delay: 500
  });
}

  


/***********fleche**********/
document.addEventListener('DOMContentLoaded', function() {
  var backArrowElement = document.getElementById('backArrow');
  console.log(backArrowElement);  // Vérifie s'il est null ou s'il s'agit de l'élément réel
  if (backArrowElement) {
      backArrowElement.addEventListener('click', function() {
          window.location.href = 'index.html';
      });
  }
});
