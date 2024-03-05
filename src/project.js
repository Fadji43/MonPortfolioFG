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

  let currentProject = null;
  let currentImageIndex = 0;

  // Fonction pour mettre à jour l'affichage du modal
  function updateModal() {
    if (currentProject) {
      const imagePath = currentProject.src[currentImageIndex];
      openModal(`./src/${imagePath}`, currentProject.description, currentProject.outils, currentProject.githubLink, [currentProject.objectif1, currentProject.objectif2, currentProject.objectif3]);
    }
  }

  // Gestionnaire d'événement pour le bouton Précédent
  const prevButton = document.getElementById('arrowright');
  if (prevButton) {
    prevButton.addEventListener('click', function () {
      currentImageIndex = (currentImageIndex - 1 + currentProject.src.length) % currentProject.src.length;
      updateModal();
    });
  }

  // Gestionnaire d'événement pour le bouton Suivant
  const nextButton = document.getElementById('arrowleft');
  if (nextButton) {
    nextButton.addEventListener('click', function () {
      currentImageIndex = (currentImageIndex + 1) % currentProject.src.length;
      updateModal();
    });
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
      currentProject = findProjectById(dataId);
      currentImageIndex = 0;
      updateModal();
    });
  });


  function findProjectById(id) {
    const projects ={
      "gallery": [
      {
        "id": 1,
        "src": [
            "images/projets/booki.webp",
            "images/projets/booki_1.webp",
            "images/projets/booki_2.webp",
            "images/projets/booki_3.webp"
        ],
        "description": "Booki est un compagnon de voyage ultime pour une expérience de location d'hébergements et d'activités, personnalisée en fonction de votre emplacement. La plateforme innovante allie la praticité de la réservation en ligne à la découverte locale, offrant une gamme étendue d'options d'hébergement et d'activités. Il comporte un catalogue d'hébergements, allant des hébergements de luxe aux options plus abordables, le tout géolocalisé pour vous permettre de trouver l'endroit idéal. ",
        "mission": "A partir de la maquette : Création  d’une application en first mobile ",
        "objectif1": "Création de la page d’accueil",
        "objectif2": "Création des pages logements avec les détails",
        "objectif3": "Insertion d’animation css",
        "outils": "HTML & CSS",
        "githubLink": "https://github.com/Fadji43/Booki-starter-code.git"
      },
      {
        "id": 2,
        "src": [
          "images/projets/ohmyfood.webp",
          "images/projets/ohmyfood_1.webp",
          "images/projets/ohmyfood_2.webp"
        ],
        "description": "Oh my Food se lance dans le développement d'un site mobile first, une plateforme novatrice qui compile les menus exquis de nos restaurants partenaires. L’objectif est de faciliter non seulement la découverte de ces joyaux culinaires, mais aussi de rendre la réservation en ligne et la personnalisation de votre repas aussi simples qu'un clic. Imaginez pouvoir composer votre menu idéal parmi une sélection de propositions alléchantes, le tout à portée de main, sur votre smartphone.",
        "mission": "A partir de la maquette : ",
        "objectif1": "Création de la page d’accueil",
        "objectif2": "création des pages des restaurateurs avec détails des menus",
        "objectif3": "Insertion de différentes animations css",
        "outils": "HTML & CSS",
        "githubLink": "https://github.com/Fadji43/OhmyFood.git"
      },
      {
        "id": 3,
        "src": [
          "images/projets/Sophie-bluel.webp",
          "images/projets/Sophie-bluel_2.webp",
          "images/projets/Sophie-bluel_3.webp",
        ],
        "description": "Le projet est de créer une plateforme en ligne à la hauteur du talent et de la créativité d’une architecte d'intérieur. Conçu pour mettre en avant ses projets les plus emblématiques, le site permettra également aux visiteurs de plonger dans l'univers inspirant de l'architecte, découvrant ainsi le mariage subtil entre formes, couleurs et fonctionnalités.",
        "mission": "A partir de la maquette : ",
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
        "mission": "A partir de la maquette : ",
        "objectif1": "Création de la page d’accueil",
        "objectif2": "Création des pages logements",
        "objectif3": "Connexion à la base de donnée",
        "outils": "HTML/ CSS/ React/ Node.js",
        "githubLink": "https://github.com/Fadji43/Projet_Kasa.git"
      },
      {
        "id": 5,
        "src":[
          "images/projets/724events_1.webp",
          "images/projets/724events_2.webp",
          "images/projets/724events_3.webp",
        ], 
        "description": "La mission est de perfectionner l'expérience en ligne de 724 Events en identifiant et en résolvant rapidement les problèmes potentiels du site vitrine. Grâce à des tests unitaires approfondis et à l'utilisation judicieuse des outils à notre disposition, nous sommes déterminés à élever la qualité de notre site pour qu'il soit à la hauteur de la réputation exceptionnelle de 724 Events",
        "mission": "Débuggez le site d'agence événementiel ",
        "objectif1": "Identifier les problème et trouver leurs sources",
        "objectif2": "Résolution des erreurs",
        "objectif3": "implémentez de nouveaux tests unitaires",
        "outils": "HTML/ CSS/ REACT",
        "githubLink": "https://github.com/Fadji43/Nina_Carducci.git"
      },
      {
        "id": 6,
        "src": [
          "images/projets/argentbank_3.webp",
          "images/projets/argentbank_6.webp",
          "images/projets/argentbank_4.webp",
          "images/projets/argentbank_2.webp"
        ],
        "description": "L’objectif est la mise en place un tableau de bord innovant pour les utilisateurs de notre application bancaire. Après avoir accès au compte utilisateur, ce tableau de bord offrira une vue d'ensemble complète des comptes, des transactions et des informations financières, tout en intégrant des profils utilisateur pour une personnalisation optimale. ",
        "mission": "A partir de la maquette : ",
        "objectif1": "Création de la page d’accueil",
        "objectif2": "création de la page profil utilisateur ",
        "objectif3": "Gestion d’accès à la page utilisateur avec validation des identifiants et mot de passe, modification «/username/» par l’utilisateur", 
        "outils": "HTML/ CSS/ REACT/ Redux/ MongoDB Atlas",
        "githubLink": "https://github.com/Fadji43/ArgentBank-website.git"
      }
    ]
    }

      const galleryProject = projects.gallery.find(project => project.id === parseInt(id));
      return galleryProject || null; 
   }
  });