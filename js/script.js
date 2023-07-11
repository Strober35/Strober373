        /***INPHBBBBBBBBBBBBBBBBBB*********************************************** */
var messageElement = document.getElementById("message");
var additionalMessageElements = [
  document.getElementById("additional-message1"),
  document.getElementById("additional-message2"),
  document.getElementById("additional-message3"),
  document.getElementById("additional-message4"),
  document.getElementById("additional-message5"),
  document.getElementById("additional-message6"),
  document.getElementById("additional-message7"),
  document.getElementById("additional-message8"),
  document.getElementById("additional-message9")
];
var messages = [
  "caractère administratif sous la tutelle du Ministère de l’Enseignement Supérieure et de la Recherche Scientifique, l’Institut National Polytechnique est une institution unique dans la Sous-région ouest- africaine. Créé par décret 96-678 du 04 septembre 1996, l’INP-HB est issu du regroupement de l’Ecole Nationale Supérieure d’Agronomie (ENSA), l’Ecole Nationale Supérieure des Travaux Publics (ENSTP), l’Institut Agricole de Bouaké (IAB) et l’Institut National Supérieure de l’Enseignement Technique (INSET), quatre écoles appelées communément les « Ex Grandes Ecoles de Yamoussoukro ».",
  "Grâce à son savoir-faire et son expertise, l’institut a formé des milliers de Managers, ingénieurs et techniciens supérieurs dans les domaines du Commerce, des Tavaux Publics, de l’Agronomie, de l’Industrie, des Mines et de la Géologie, qui font sa fierté en Afrique et à travers le monde. Hormis ses formations de base, l’INP-HB a également mis en œuvre plusieurs programmes professionnalisants (Mastères spécialisés) en vue d’étoffer son offre de formation mais surtout, répondre aux besoins sans cesse croissants des entreprises.",
  "La prepa Mathématique Physique Science Industrielle est réservée uniquement pour les élèves titulaires des BAC  C et E .Elle est considérée comme la filière la plus difficile de la prépa mais comme on le dit ’’il y'a du miel au bout’’.En venant en MPSI vous aurez la possibilité d’approfondir vos connaissances mathématiques, vous connaîtrez le fondement de la physique et decouvrirez une nouvelle matière.  La formation est conçue en fonction de 04 objectifs essentiels : - Développer conjointement l’intuition, l’imagination, le raisonnement, et la rigueur ; - Promouvoir la réflexion personnelle des étudiants sur les problèmes et les phénomènes, sur la portée des concepts, des hypothèses, des résultats et des méthodes, au moyen d’exemples et de contre-exemples, développer ainsi une attitude de questionnement et de recherche ; - Exploiter toute la richesse de la démarche scientifique ; - Privilégier les problèmes scientifiques susceptibles de développer la réflexion personnelle des élèves et leur capacité de synthèse. Néanmoins pour y entrer vos moyennes en Maths et physique doivent être au dela de 12. Mais si ce n’est pas le cas vous devez être dans une progression c’est à dire que vous avez des moyennes qui ont augmenté au fil du temps. Et avoir de bonnes notes en Maths et Physique au Bac. Ce qui fait le charme de cette filière c’est que c’est elle qui a le plus de débouchés au niveau des Écoles d’ingénieurs Grâce à la filière Techno vous pourriez accéder au meilleurs ecolesde France tels que : X Polytechnique, ESTP Paris ... Quant au écoles d’ingénieurs de l’INP-HB on a les Ecoles de Travaux Publics, d’industries, de Mines et de Commerces; On voit tout de suite que la MPSI t’offre une large panoplie pour continuer tes études. Pour les métiers je dirai que la MPSI permet d’avoir non seulement des métiers scientifiques, techniques, mais aussi des métiers de l’administration. Les concours  (étrangers ou pas) sont bénéfiques dans la mesure où tu seras un cadre dans les institutions internationales. Le concours d'entrée à L'ENSEA option ISE est ouvert à tous ceux qui entrent dans cette filière. En somme en entrant en MPSI vous vous rapprochez plus de vos vocations ( aéronautique, mécanique, Bâtiment, Urbanisme, technologie, Robotique, Statistiques, Environnement, Logistique, Informatique) et même l'armée.",
  "Comme son nom l'indique elle traite de beaucoup de biologie ( Animal _Vegetal_moleculaire_cellulaire) Ce qui permet plus tard au niveau du concours au cycle ingénieur d'intégrer des école comme l'ESA ( École Supérieure d'agronomie) . Néanmoins il faut souligner aussi que nous somme pas en reste au niveau des autres matières puisque nous avons des coefficients vraiment élevés dans des matières comme Mathématiques Chimie ou encore physique Ce qui nous ouvre des possibilités dans d'autres école comme l'ESI (école supérieure d'industrie) . En plus de cela il faut noter que cette filière tout comme les autres est ouverte aux BAC C et D.Aussi faut il noter qu'elle permet d'avoir accès à l'ESPE(école supérieure de pétrole et de l'énergie) ,à l'ESMG( école supérieure de mine et de géologie). Il est bien de savoir que la prépa bio permet de passer aussi certains concours destinés en priorité aux ECS ou aux MPSI telques celui de l'ENSEA ou même celui de l'ESTP PARIS. Toutefois pour ceux qui veulent faire l'ESA ,le passage par la BCPST est obligatoire.",
  "Alors déjà comme son nom le contient, c'est surtout une prépa pour ceux qui aspirent à travailler dans les domaines de l'économie, de la finance, de l'audit, du marketing, du management, de la banque ou de l'assurance, et j'en passe... On vous forme deux années pour rester soit à l'ESCAE ( École Supérieure de Commerce et d'administration des Entreprises ) qui est une école de l'INPHB, soit à l'ENSEA ( École Nationale Supérieure de Statistique et d'économie Appliquée )... Soit hors de la Côte D'Ivoire en passant des concours français Des écoles comme L'ISFA, qui fait de l'actuariat ( ça consiste en la gestion du risque, prévoir comment quelque chose de grave pourrait arriver à une entreprise et mettre tout en œuvre pour l'éviter ) principalement, ou encore des BUSINESS SCHOOLS, des écoles qui forment des cadres qui travaillent après dans les domaines que j'ai cités plus haut...",
  "Ouverte à la rentrée académique 2022-2023, la prépa PCSI est destinée aux bacheliers généraux (BAC C, D et E). Elle s’adresse aux élèves intéressés par une approche des sciences fondamentales fondée sur l’expérimentation et la modélisation, désirant comprendre le fonctionnement des différents objets et ayant des facilités pour la manipulation. C’est aussi la voie à privilégier pour les élèves attirés par la chimie. L’objectif de cette filière est de préparer en 02 ans, les meilleurs élèves pour intégrer une grande école d’ingénieur dans le domaine industriel.",
  "Ce site est en phase de test! SVP veuillez nous aider à corriger les bugs et la non-adaptabilité à tout écran en signalant tous les défauts aux numéros en bas de page.",
  "INPHB",
  "ESATIC",
  "Cette page est en cours de construction"
];

var delay = 10; // Temps de délai entre chaque caractère (en millisecondes)

function afficherCaractereParCaractere(texte, element) {
  var index = 0;
  var timer = setInterval(function() {
    if (index < texte.length) {
      element.textContent += texte.charAt(index);
      index++;
    } else {
      clearInterval(timer);
    }
  }, delay);
}

afficherCaractereParCaractere(messages[0], messageElement);

for (var i = 0; i < additionalMessageElements.length; i++) {
  afficherCaractereParCaractere(messages[i + 1], additionalMessageElements[i]);
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
