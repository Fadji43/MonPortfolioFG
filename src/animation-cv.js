
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

/***********titre-cv***********/
document.addEventListener('DOMContentLoaded', function() {
    anime.timeline({loop: false})
  .add({
    targets: '.anim__cvName',
    scale: [20,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 2200,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.anim__cvName',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });
});

/*********dropdown-skill **********/
$(document).ready(function() {
  // Cacher initialement tous les paragraphes
  $('.dropdown-diplome, .dropdown-formation, .dropdown-logiciels').hide();

  // Ajouter un gestionnaire de clic pour chaque titre
  $('#diplomeToggle').click(function() {
    $('#diplomeToggle').toggleClass('active');
    $('.dropdown-diplome').slideToggle('slow');
  });

  $('#formationToggle').click(function() {
    $('#formationToggle').toggleClass('active');
    $('.dropdown-formation').slideToggle('slow');
  });

  $('#logicielsToggle').click(function() {
    $('#logicielsToggle').toggleClass('active');
    $('.dropdown-logiciels').slideToggle('slow');
  });
});

