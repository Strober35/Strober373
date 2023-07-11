// Message de bienvenue
var messages = [
  "cette page est en phase de test ! Si vous truver des anmaies prière svp me contacter.",
  "cette page est en phase de test! Si vous truver des anmaies prière svp me contacter",
  "cette page est en phase de test! Si vous truver des anmaies prière svp me contacter",
  "cette page est en phase de test! Si vous truver des anmaies prière svp me contacter",
  "cette page est en phase de test! Si vous truver des anmaies prière svp me contacter",
  "cette page est en phase de test! Si vous truver des anmaies prière svp me contacter"
];

// Fonction pour afficher le message caractère par caractère
function afficherMessage(message, containerId) {
  var container = document.getElementById(containerId);
  container.innerHTML = ""; // Effacer le contenu précédent

  var index = 0;
  var timer = setInterval(function() {
      container.innerHTML += message.charAt(index);
      index++;
      if (index >= message.length) {
          clearInterval(timer);
      }
  }, 10); // Vitesse d'affichage (en millisecondes)
}

// Fonction pour afficher les messages de bienvenue pour chaque section
function afficherMessagesBienvenue() {
  afficherMessage(messages[0], "message-container-1");
  afficherMessage(messages[1], "message-container-2");
  afficherMessage(messages[2], "message-container-3");
  afficherMessage(messages[3], "message-container-4");
  afficherMessage(messages[4], "message-container-5");
  afficherMessage(messages[5], "message-container-6");
}
//Navbar
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

 // Fonction JavaScript pour afficher ou masquer le menu déroulant
 const profileImg = document.querySelector('.profile-img');
        const dropdown = document.querySelector('.dropdown');

        profileImg.addEventListener('click', function() {
            dropdown.classList.toggle('open');
        });

        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        window.addEventListener('click', function(event) {
            if (!profileImg.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove('open');
            }
        });