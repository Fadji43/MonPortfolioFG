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
    duration: 400,
    delay: 1000, 
  })
  anime({
    targets: '.cv .circle-white-dashed',
    rotateZ: 360,
    duration: 5000,
    easing: "linear",
    loop: true
  });
});

/**************fusée***************/
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if the user has scrolled to the bottom of the page
    function isScrolledToBottom() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    // Function to animate the rocket when scrolled to the bottom
    function animateRocket() {
      anime({
        targets: '#rocket',
        translateX: '1vw',
        translateY: '-1vh',
        opacity: 1,
        easing: 'easeOutQuad',
        duration: 2000,
        delay: 500
      });
    }

    // Attach the event listener to the window scroll event
    window.addEventListener('scroll', function() {
      if (isScrolledToBottom()) {
        animateRocket();
        // Remove the event listener once the animation is triggered to avoid multiple executions
        window.removeEventListener('scroll', arguments.callee);
      }
    });
  });

/***********titre-cv***********/
document.addEventListener('DOMContentLoaded', function() {
    anime.timeline({loop: true})
  .add({
    targets: '.anim__cvName',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.anim__cvName',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });
});

/***********fleche**********/
document.addEventListener('DOMContentLoaded', function() {
  // Écoutez le clic sur la flèche
  document.getElementById('backArrow').addEventListener('click', function() {
      window.location.href = 'index.html'; // Remplacez 'index.html' par le chemin de votre page index
  });
});