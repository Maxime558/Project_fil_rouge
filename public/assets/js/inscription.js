/* 

 ██████╗ ██╗   ██╗███████╗██████╗ ██╗      █████╗ ██╗   ██╗
██╔═══██╗██║   ██║██╔════╝██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝
██║   ██║██║   ██║█████╗  ██████╔╝██║     ███████║ ╚████╔╝ 
██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗██║     ██╔══██║  ╚██╔╝  
╚██████╔╝ ╚████╔╝ ███████╗██║  ██║███████╗██║  ██║   ██║   
 ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   
*/

function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}

showOverlay();

setTimeout(function () {
  hideOverlay();
}, 600);

/*   
 ██████╗  █████╗  ██████╗ ███████╗     ██████╗ ██████╗ ███╗   ██╗███╗   ██╗███████╗██╗  ██╗██╗ ██████╗ ███╗   ██╗
 ██╔══██╗██╔══██╗██╔════╝ ██╔════╝    ██╔════╝██╔═══██╗████╗  ██║████╗  ██║██╔════╝╚██╗██╔╝██║██╔═══██╗████╗  ██║
 ██████╔╝███████║██║  ███╗█████╗      ██║     ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗   ╚███╔╝ ██║██║   ██║██╔██╗ ██║
 ██╔═══╝ ██╔══██║██║   ██║██╔══╝      ██║     ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝   ██╔██╗ ██║██║   ██║██║╚██╗██║
 ██║     ██║  ██║╚██████╔╝███████╗    ╚██████╗╚██████╔╝██║ ╚████║██║ ╚████║███████╗██╔╝ ██╗██║╚██████╔╝██║ ╚████║
 ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
*/


const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (
    urlParams.has("ajouterClasse") &&
    urlParams.get("ajouterClasse") === "true"
  ) {
    const maDiv = document.getElementById("container");
    maDiv.classList.add("right-panel-active");
  }
});
