// ██╗███╗   ██╗███████╗ ██████╗     ██████╗ ██╗   ██╗██╗     ██╗     ███████╗
// ██║████╗  ██║██╔════╝██╔═══██╗    ██╔══██╗██║   ██║██║     ██║     ██╔════╝
// ██║██╔██╗ ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██║     ██║     █████╗  
// ██║██║╚██╗██║██╔══╝  ██║   ██║    ██╔══██╗██║   ██║██║     ██║     ██╔══╝  
// ██║██║ ╚████║██║     ╚██████╔╝    ██████╔╝╚██████╔╝███████╗███████╗███████╗
// ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝     ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝
                                                                         
// Sélectionnez tous les éléments avec la classe "tooltip"
const tooltips = document.querySelectorAll(".tooltip");

// Parcourez chaque infobulle
tooltips.forEach((tooltip) => {
  let timeoutId;

  tooltip.parentElement.addEventListener("mouseover", () => {
    timeoutId = setTimeout(() => {
      tooltip.classList.add("active");
    }, 500);
  });

  tooltip.parentElement.addEventListener("mouseout", () => {
    clearTimeout(timeoutId);
    tooltip.classList.remove("active");
  });
});

// ███╗   ███╗███████╗███╗   ██╗██╗   ██╗     ██████╗ ██████╗ ███╗   ██╗███╗   ██╗███████╗██╗  ██╗██╗ ██████╗ ███╗   ██╗
// ████╗ ████║██╔════╝████╗  ██║██║   ██║    ██╔════╝██╔═══██╗████╗  ██║████╗  ██║██╔════╝╚██╗██╔╝██║██╔═══██╗████╗  ██║
// ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║    ██║     ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗   ╚███╔╝ ██║██║   ██║██╔██╗ ██║
// ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║    ██║     ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝   ██╔██╗ ██║██║   ██║██║╚██╗██║
// ██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝    ╚██████╗╚██████╔╝██║ ╚████║██║ ╚████║███████╗██╔╝ ██╗██║╚██████╔╝██║ ╚████║
// ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                                                                                                                     
const connexionIcon = document.getElementById("connexion-icon");
const connexionMenu = document.getElementById("connexion-menu");
const notif4 = document.getElementById("notif4");

let connexionMenuVisible = false;

// Fonction pour masquer le menu de connexion
function hideConnexionMenu() {
  connexionMenu.classList.remove("active");
  connexionMenuVisible = false;
}

// Fonction pour afficher le menu de connexion
function showConnexionMenu() {
  hideSearchBar(); // Masque la barre de recherche lorsque le menu de connexion est ouvert
  connexionMenu.classList.add("active");
  connexionMenuVisible = true;
}

// Événement de clic sur l'icône de connexion
connexionIcon.addEventListener("click", (event) => {
  if (window.innerWidth < 1400) {
    if (connexionMenu.classList.contains("active")) {
      hideConnexionMenu();
    } else {
      showConnexionMenu();
    }
    event.stopPropagation();
  }
});

// Événement de clic sur l'icône de notification
notif4.addEventListener("click", (event) => {
  if (window.innerWidth >= 1400) {
    if (connexionMenuVisible) {
      hideConnexionMenu();
    } else {
      showConnexionMenu();
    }
    event.stopPropagation();
  }
});

// Événement de clic en dehors du menu de connexion pour le masquer
document.addEventListener("click", () => {
  if (connexionMenuVisible) {
    hideConnexionMenu();
  }
});

// Événement de clic dans le menu de connexion pour empêcher la propagation du clic
connexionMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// ██████╗  █████╗ ██████╗ ██████╗ ███████╗    ██████╗ ███████╗    ██████╗ ███████╗ ██████╗██╗  ██╗███████╗██████╗  ██████╗██╗  ██╗███████╗
// ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝    ██╔══██╗██╔════╝    ██╔══██╗██╔════╝██╔════╝██║  ██║██╔════╝██╔══██╗██╔════╝██║  ██║██╔════╝
// ██████╔╝███████║██████╔╝██████╔╝█████╗      ██║  ██║█████╗      ██████╔╝█████╗  ██║     ███████║█████╗  ██████╔╝██║     ███████║█████╗  
// ██╔══██╗██╔══██║██╔══██╗██╔══██╗██╔══╝      ██║  ██║██╔══╝      ██╔══██╗██╔══╝  ██║     ██╔══██║██╔══╝  ██╔══██╗██║     ██╔══██║██╔══╝  
// ██████╔╝██║  ██║██║  ██║██║  ██║███████╗    ██████╔╝███████╗    ██║  ██║███████╗╚██████╗██║  ██║███████╗██║  ██║╚██████╗██║  ██║███████╗
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚══════╝    ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝
                                                                                                                                        
// Sélectionnez l'élément de notification pour la barre de recherche
const tooltipNotif3 = document.getElementById("affichage-barre");
const searchIcon = document.getElementById("recherche");
const searchBar = document.getElementById("search-bar");

let searchBarVisible = false;

// Fonction pour masquer la barre de recherche
function hideSearchBar() {
  searchBar.classList.add("hidden");
  searchBarVisible = false;
}

// Événement de clic sur l'icône de notification pour afficher/masquer la barre de recherche
tooltipNotif3.addEventListener("click", (event) => {
  if (window.innerWidth >= 1400) {
    if (searchBarVisible) {
      hideSearchBar();
    } else {
      searchBar.classList.remove("hidden");
      searchBarVisible = true;
    }
    event.stopPropagation();
  }
});

// Événement de clic dans la barre de recherche pour empêcher la propagation du clic
searchBar.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Événement de clic en dehors de la barre de recherche pour la masquer
document.addEventListener("click", () => {
  hideSearchBar();
});

// Événement de clic sur l'icône de recherche pour afficher/masquer la barre de recherche (pour les écrans plus petits)
searchIcon.addEventListener("click", (event) => {
  if (window.innerWidth < 1400) {
    searchBar.classList.toggle("hidden");
    searchBarVisible = !searchBarVisible;
    event.stopPropagation();
  }
});
