/***********cv**********/
document.addEventListener('DOMContentLoaded', function() {
anime.timeline({loop: true})
  .add({
    targets: '.cv',
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1500,
  })
  .add({
    targets: '.cv',
    opacity: [1, 0],
    easing: 'easeInOutQuad',
    duration: 1500,
    delay: 1000, 
  })
  anime({
    targets: '.cv .circle-white-dashed',
    rotateZ: 360,
    duration: 8000,
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
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});