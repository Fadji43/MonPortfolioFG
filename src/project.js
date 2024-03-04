document.addEventListener('DOMContentLoaded', function () {
  console.log("Le script est en cours d'exécution !");

  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalOutils = document.getElementById('modal-outils');
  const modalGithub = document.getElementById('github-link');

  function openModal(imageSrc, description, outils, githubLink, objectifs) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalDescription.innerHTML = description;

    const objectifsSection = document.getElementById('modal-objectifs');
    if (objectifs && objectifs.length > 0) {
      const objectifsHTML = objectifs.map(objectif => `<p>${objectif}</p>`).join('');
      objectifsSection.innerHTML = objectifsHTML;
    } else {
      objectifsSection.innerHTML = ''; // Vide la section si pas d'objectifs
    }

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
        openModal(`./src/${imagePath}`, project.description, project.outils, project.githubLink, [project.objectif1, project.objectif2, project.objectif3]);
      }
    });
  });


  function findProjectById(id) {
    const projects = {
        "gallery": [
          {
            "id": 1,
            "src": [
                "./images/projets/booki.webp",
                "./images/projets/booki_1.webp",
                "./images/projets/booki_2.webp",
                "./images/projets/booki_3.webp"
            ],
            "description": "Booki est un compagnon de voyage ultime pour une expérience de location d'hébergements et d'activités, personnalisée en fonction de votre emplacement. La plateforme innovante allie la praticité de la réservation en ligne à la découverte locale, offrant une gamme étendue d'options d'hébergement et d'activités. Il comporte un catalogue d'hébergements, allant des hébergements de luxe aux options plus abordables, le tout géolocalisé pour vous permettre de trouver l'endroit idéal. ",
            "objectif1": "Application en first mobile",
            "objectif2": "Création de la page d’accuei des pages logements avec les détails",
            "objectif3": "Insertion d’animation css",
            "outils": "HTML & CSS",
            "githubLink": "https://github.com/Fadji43/Booki-starter-code.git"
          },
          {
            "id": 2,
            "src": 
              "./images/projets/ohmyfood.webp",
            "description": "Oh my Food se lance dans le développement d'un site mobile first, une plateforme novatrice qui compile les menus exquis de nos restaurants partenaires. L’objectif est de faciliter non seulement la découverte de ces joyaux culinaires, mais aussi de rendre la réservation en ligne et la personnalisation de votre repas aussi simples qu'un clic. Imaginez pouvoir composer votre menu idéal parmi une sélection de propositions alléchantes, le tout à portée de main, sur votre smartphone.",
            "objectif1": "Création de la page d’accueil",
            "objectif2": "création des pages des restaurateurs avec détails des menus",
            "objectif3": "Insertion de différentes animations css",
            "outils": "HTML & CSS",
            "githubLink": "https://github.com/Fadji43/OhmyFood.git"
          },
          {
            "id": 3,
            "src": "images/projets/Sophie-bluel.webp",
            "description": "Le projet est de créer une plateforme en ligne à la hauteur du talent et de la créativité d’une architecte d'intérieur. Conçu pour mettre en avant ses projets les plus emblématiques, le site permettra également aux visiteurs de plonger dans l'univers inspirant de l'architecte, découvrant ainsi le mariage subtil entre formes, couleurs et fonctionnalités.",
            "objectif1": "Création de la page d’accueil",
            "objectif2": "Affichage des travaux à partir du back-end",
            "objectif3": "connexion / déconnexion et modification des affichages",
            "outils": "HTML/ CSS/ JS",
            "githubLink": "https://github.com/Fadji43/Portfolio-architecte-sophie-bluel.git"
          },
          {
            "id": 4,
            "src": [
              "./images/projets/kasa.webp",
              "./images/projets/kasa_1.webp",
              "./images/projets/kasa_3.webp",
              "./images/projets/kasa_4.webp"
            ],
            "description": "La mission est de repenser et de redéfinir la plateforme Kasa pour qu'elle soit à la hauteur des attentes de nos utilisateurs, en créant une interface conviviale et moderne qui facilite la recherche, la réservation et l'expérience globale de la location d'appartements. La refonte vise à rendre la plateforme plus intuitive, plus interactive et à offrir une esthétique raffinée pour accompagner chaque étape du processus de location.",
            "objectif1": "Création de la page d’accueil",
            "objectif2": "Création des pages logements",
            "objectif3": "Connexion à la base de donnée",
            "outils": "HTML/ CSS/ React/ Node.js",
            "githubLink": "https://github.com/Fadji43/Projet_Kasa.git"
          },
          {
            "id": 5,
            "src":[
              "./images/projets/nina_carducci.webp",
              "./images/projets/nina_carducci_2.webp",
              "./images/projets/Nina_Lighthouse_av.webp",
              "./images/projets/Nina_Lighthouse_ap.webp"
            ], 
            "description": "Ce projet vise a accomplir une analyse approfondie de du site web de Nina Carducci, et identifié des opportunités d'optimisation SEO significatives. L’objectif est de maximiser votre visibilité sur les moteurs de recherche, d'attirer un public plus large et d'améliorer la performance globale du site.",
            "objectif1": "Premier audit pour faire le point : évaluation des différents aspects du site web : performance, accessibilité, meilleure pratique et optimisation pour les moteurs de recherches",
            "objectif2": "Amélioration",
            "objectif3": "Présentation de l’audit final",
            "outils": "Lighthouse",
            "githubLink": "https://github.com/Fadji43/Nina_Carducci.git"
          },
          {
            "id": 6,
            "src": [
              "./images/projets/argentbank1.webp",
              "./images/projets/argentbank_2.webp",
              "./images/projets/argentbank_3.webp",
              "./images/projets/argentbank_6.webp",
              "./images/projets/argentbank_4.webp"
            ],
            "description": "L’objectif est la mise en place un tableau de bord innovant pour les utilisateurs de notre application bancaire. Après avoir accès au compte utilisateur, ce tableau de bord offrira une vue d'ensemble complète des comptes, des transactions et des informations financières, tout en intégrant des profils utilisateur pour une personnalisation optimale. ",
            "objectif1": "Création de la page d’accueil",
            "objectif2": "création de la page profil utilisateur ",
            "objectif3": "Gestion d’accès à la page utilisateur avec validation des identifiants et mot de passe, modification «/username/» par l’utilisateur", 
            "outils": "HTML/ CSS/ REACT/ Redux/ MongoDB Atlas",
            "githubLink": "https://github.com/Fadji43/ArgentBank-website.git"
          }
        ]
      };

      const galleryProject = projects.gallery.find(project => project.id === parseInt(id));
      return galleryProject || null; 
   }
  });