document.addEventListener('DOMContentLoaded', function () {
  console.log("Le script est en cours d'exécution !");

  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalMission = document.getElementById('modal-mission');
  const modalOutils = document.getElementById('modal-outils');
  const modalGithub = document.getElementById('github-link');

  function OpenModal(imageSrc, description, mission, outils, githubLink) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalDescription.innerHTML = description;
    modalMission.innerHTML = mission;
    modalOutils.innerHTML = outils || '';
    modalGithub.href = githubLink;
    console.log("au click !");
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  // Ajout d'un gestionnaire d'événements pour la croix de fermeture
  const closeIcon = document.querySelector('.close');
  if (closeIcon) {
    closeIcon.addEventListener('click', closeModal);
  }

  // Ajout d'un gestionnaire d'événements pour chaque image de la galerie
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const dataId = item.getAttribute('data-id');
      const project = findProjectById(dataId);
      if (project) {
        const imagePath = project.src;
        OpenModal(`./src/${imagePath}`, project.description, project.mission, project.outils, project.githubLink);
      }
    });
  });

  function findProjectById(id) {
    const projects = {
      "gallery": [
        {
          "id": 1,
          "src": "images/projets/booki.png",
          "description": "Booki est un compagnon de voyage ultime pour une expérience de location d'hébergements et d'activités, personnalisée en fonction de votre emplacement. La plateforme innovante allie la praticité de la réservation en ligne à la découverte locale, offrant une gamme étendue d'options d'hébergement et d'activités. Il comporte un catalogue d'hébergements, allant des hébergements de luxe aux options plus abordables, le tout géolocalisé pour vous permettre de trouver l'endroit idéal. ",
          "mission": "La création des maquettes et des prototypes permet pour visualiser l'interface utilisateur et d’assurer que l'expérience utilisateur intuitive et conviviale, mettant l'accent sur la simplicité de la navigation et la facilité d'utilisation des fonctionnalités. C’est en HTML et CSS que cette application se compose, et pourra tout à fait s’allier avec des bibliothèques et frameworks si le projet devait être modifier.",
          "outils": "HTML & CSS",
          "githubLink": "https://github.com/Fadji43/Booki-starter-code.git"
        },
        {
          "id": 2,
          "src": "images/projets/ohmyfood.png",
          "description": "Oh my Food se lance dans le développement d'un site mobile first, une plateforme novatrice qui compile les menus exquis de nos restaurants partenaires. L’objectif est de faciliter non seulement la découverte de ces joyaux culinaires, mais aussi de rendre la réservation en ligne et la personnalisation de votre repas aussi simples qu'un clic. Imaginez pouvoir composer votre menu idéal parmi une sélection de propositions alléchantes, le tout à portée de main, sur votre smartphone.",
          "mission": "Création  d’une application avec une simplicité d'utilisation, intuitif et élégant, mettant en avant les délices de chaque restaurant partenaire. Utilisant les outils fondamentaux tels qu'HTML et CSS, pour offrir une expérience utilisateur fluide sur ordinateur ou téléphone portable.",
          "outils": "HTML & CSS",
          "githubLink": "https://github.com/Fadji43/OhmyFood.git"
        },
        {
          "id": 3,
          "src": "images/projets/Sophie-bluel.webp",
          "description": "Le projet est de créer une plateforme en ligne à la hauteur du talent et de la créativité d’une architecte d'intérieur. Conçu pour mettre en avant ses projets les plus emblématiques, le site permettra également aux visiteurs de plonger dans l'univers inspirant de l'architecte, découvrant ainsi le mariage subtil entre formes, couleurs et fonctionnalités.",
          "mission": "À l'aide d'outils puissants tels que HTML, CSS et JS, l'équipe talentueuse d'ArchiWebos s'attelle à créer une expérience en ligne immersive. Chaque détail du site est pensé pour captiver les visiteurs, de la navigation fluide à l'esthétique épurée, mettant en valeur les photos éloquentes des projets réalisés. Le site sera non seulement une vitrine, mais aussi un témoignage interactif de l'expertise de notre architecte d'intérieur.",
          "outils": "HTML/ CSS/ JS",
          "githubLink": "https://github.com/Fadji43/Portfolio-architecte-sophie-bluel.git"
        },
        {
          "id": 4,
          "src": "./images/projets/kasa.png",
          "description": "La mission est de repenser et de redéfinir la plateforme Kasa pour qu'elle soit à la hauteur des attentes de nos utilisateurs, en créant une interface conviviale et moderne qui facilite la recherche, la réservation et l'expérience globale de la location d'appartements. La refonte vise à rendre la plateforme plus intuitive, plus interactive et à offrir une esthétique raffinée pour accompagner chaque étape du processus de location.",
          "mission":"À l'aide d'outils de pointe tels que HTML, CSS, React et Node.js, l'équipe de développement de Kasa travaille ardemment pour donner vie à cette vision de la nouvelle plateforme. HTML et CSS sont utilisés pour assurer une structure solide et un design attrayant, tandis que React et Node.js apportent la dynamique et l'interactivité nécessaires pour une expérience utilisateur moderne et réactive.",
          "outils": "HTML/ CSS/ React/ Node.js",
          "githubLink": "https://github.com/Fadji43/Projet_Kasa.git"
        },
        {
          "id": 5,
          "src": "./images/projets/nina_carducci.png",
          "description": "Ce projet vise a accomplir une analyse approfondie de du site web de Nina Carducci, et identifié des opportunités d'optimisation SEO significatives. L’objectif est de maximiser votre visibilité sur les moteurs de recherche, d'attirer un public plus large et d'améliorer la performance globale du site.",
          "mission":"Suite à un rapport d’optimisation, évaluer différents aspects de votre site web, y compris la performance, l'accessibilité, la meilleure pratique, et l'optimisation pour les moteurs de recherche. Les résultats initiaux ont fourni des insights précieux sur les domaines qui pourraient bénéficier d'améliorations. Et ainsi le modifier pour une meilleure visibilité sur les moteurs de recherche, d'une expérience utilisateur améliorée et d'une augmentation potentielle du trafic organique.",
          "outils": "Lighthouse",
          "githubLink": "https://github.com/Fadji43/Nina_Carducci.git"
        },
        {
          "id": 6,
          "src": "./images/projets/argentbank1.png",
          "description": "L’objectif est la mise en place un tableau de bord innovant pour les utilisateurs de notre application bancaire. Après avoir accès au compte utilisateur, ce tableau de bord offrira une vue d'ensemble complète des comptes, des transactions et des informations financières, tout en intégrant des profils utilisateur pour une personnalisation optimale. ",
          "mission":"Mise en œuvre des outils de développement de pointe pour garantir la performance et la fiabilité de notre application. HTML et CSS sont utilisés pour la structure et le design, tandis que React et Redux apportent la dynamique et la gestion d'état nécessaires pour une interface utilisateur réactive. MongoDB Atlas, choix de base de données, pour assurer une gestion efficace des données utilisateur, garantissant sécurité et disponibilité.",
          "outils": "HTML/ CSS/ REACT/ Redux/ MongoDB Atlas",
          "githubLink": "https://github.com/Fadji43/ArgentBank-website.git"
        }
      ]
    };

    return projects.gallery.find(project => project.id == id);
  }
});


