// ██╗███╗   ██╗███████╗ ██████╗     ██████╗ ██╗   ██╗██╗     ██╗     ███████╗
// ██║████╗  ██║██╔════╝██╔═══██╗    ██╔══██╗██║   ██║██║     ██║     ██╔════╝
// ██║██╔██╗ ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██║     ██║     █████╗  
// ██║██║╚██╗██║██╔══╝  ██║   ██║    ██╔══██╗██║   ██║██║     ██║     ██╔══╝  
// ██║██║ ╚████║██║     ╚██████╔╝    ██████╔╝╚██████╔╝███████╗███████╗███████╗
// ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝     ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝
                                                                         

const tooltips = document.querySelectorAll(".tooltip");

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


function hideConnexionMenu() {
  connexionMenu.classList.remove("active");
  connexionMenuVisible = false;
}

function showConnexionMenu() {
  hideSearchBar(); // 
  connexionMenu.classList.add("active");
  connexionMenuVisible = true;
}


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


document.addEventListener("click", () => {
  if (connexionMenuVisible) {
    hideConnexionMenu();
  }
});

connexionMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// ██████╗  █████╗ ██████╗ ██████╗ ███████╗    ██████╗ ███████╗    ██████╗ ███████╗ ██████╗██╗  ██╗███████╗██████╗  ██████╗██╗  ██╗███████╗
// ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝    ██╔══██╗██╔════╝    ██╔══██╗██╔════╝██╔════╝██║  ██║██╔════╝██╔══██╗██╔════╝██║  ██║██╔════╝
// ██████╔╝███████║██████╔╝██████╔╝█████╗      ██║  ██║█████╗      ██████╔╝█████╗  ██║     ███████║█████╗  ██████╔╝██║     ███████║█████╗  
// ██╔══██╗██╔══██║██╔══██╗██╔══██╗██╔══╝      ██║  ██║██╔══╝      ██╔══██╗██╔══╝  ██║     ██╔══██║██╔══╝  ██╔══██╗██║     ██╔══██║██╔══╝  
// ██████╔╝██║  ██║██║  ██║██║  ██║███████╗    ██████╔╝███████╗    ██║  ██║███████╗╚██████╗██║  ██║███████╗██║  ██║╚██████╗██║  ██║███████╗
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚══════╝    ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝
                                                                                                                                        

const tooltipNotif3 = document.getElementById("affichage-barre");
const searchIcon = document.getElementById("recherche");
const searchBar = document.getElementById("search-bar");

let searchBarVisible = false;

function hideSearchBar() {
  searchBar.classList.add("hidden");
  searchBarVisible = false;
}

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


searchBar.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  hideSearchBar();
});

searchIcon.addEventListener("click", (event) => {
  if (window.innerWidth < 1400) {
    searchBar.classList.toggle("hidden");
    searchBarVisible = !searchBarVisible;
    event.stopPropagation();
  }
});
