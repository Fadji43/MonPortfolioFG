document.addEventListener('DOMContentLoaded', function () {
  console.log("Le script est en cours d'exécution !");

  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalOutils = document.getElementById('modal-outils');
  const modalGithub = document.getElementById('github-link');

  function openModal(imageSrc, description, outils) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalDescription.innerHTML = description;
    modalOutils.innerHTML = outils || '';
    modalGithub.innerHTML =  github
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
        const imagePath = project.src; // Utilisez le chemin complet de l'image
        openModal(`./src/${imagePath}`, project.description, project.outils, project.github);
      }
    });
  });

  function findProjectById(id) {
    const projects = {
      "gallery": [
        {
          "id": 1,
          "src": "images/projets/booki.png",
          "description": "C’est une application pour une entreprise de location d’hébergements et des activités en fonction de localisation géographique",
          "outils": "HTML & CSS",
          "github": "https://github.com/Fadji43/Booki-starter-code.git"
        },
        {
          "id": 2,
          "src": "images/projets/ohmyfood.png",
          "description": "Du beau et du bon. Oh my Food est une jeune statup qui a déjà conquis New-York et arrive à Paris. Quatre restaurateurs ont adhéré et font utiliser la plateforme OhMyFood, il faut les mettreen ligne sur le site",
          "outils": "HTML & CSS",
          "github": "https://github.com/Fadji43/OhmyFood.git"
        },
        {
          "id": 3,
          "src": "images/projets/Sophie-bluel.webp",
          "description": "C’est un site internet d’une architecte d’intérieur. Ce site est conçu par l’agence ArchiWebos.",
          "outils": "HTML/ CSS/ JS",
          "github": "https://github.com/Fadji43/Portfolio-architecte-sophie-bluel.git"
        },
        {
          "id": 4,
          "src": "./images/projets/kasa.png",
          "description": "Refonte d’une plateforme web, Kasa est dans le métier de la location d’appartements entre particuliers créé il y a près de 10 ans. ",
          "outils": "HTML/ CSS/ React/ Node.js",
          "github": "https://github.com/Fadji43/Projet_Kasa.git"
        },
        {
          "id": 5,
          "src": "./images/projets/nina_carducci.png",
          "description": "Description de l'image 1",
          "outils": "",
          "github": "https://github.com/Fadji43/Nina_Carducci.git"
        },
        {
          "id": 6,
          "src": "./images/projets/argentbank1.png",
          "description": "Mise en place du tableau bord de l’application bancaire avec accès aux profiles utilisateurs.",
          "outils": "HTML/ CSS/ REACT/ Redux/ MongoDB Atlas",
          "github": "https://github.com/Fadji43/ArgentBank-website.git"
        }
      ]
    };

    return projects.gallery.find(project => project.id == id);
  }
});


