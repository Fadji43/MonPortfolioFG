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



