OnlineWebFonts_Com({
    'Id':'.div',
    'Data':__Animations['264570'],
}).Play();


//  ██████╗██╗  ██╗ █████╗ ███╗   ███╗██████╗      ██████╗ ██████╗ ██╗     ██╗ ██████╗  █████╗ ████████╗ ██████╗ ██╗██████╗ ███████╗    
// ██╔════╝██║  ██║██╔══██╗████╗ ████║██╔══██╗    ██╔═══██╗██╔══██╗██║     ██║██╔════╝ ██╔══██╗╚══██╔══╝██╔═══██╗██║██╔══██╗██╔════╝    
// ██║     ███████║███████║██╔████╔██║██████╔╝    ██║   ██║██████╔╝██║     ██║██║  ███╗███████║   ██║   ██║   ██║██║██████╔╝█████╗      
// ██║     ██╔══██║██╔══██║██║╚██╔╝██║██╔═══╝     ██║   ██║██╔══██╗██║     ██║██║   ██║██╔══██║   ██║   ██║   ██║██║██╔══██╗██╔══╝      
// ╚██████╗██║  ██║██║  ██║██║ ╚═╝ ██║██║         ╚██████╔╝██████╔╝███████╗██║╚██████╔╝██║  ██║   ██║   ╚██████╔╝██║██║  ██║███████╗    
//  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝          ╚═════╝ ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝    

const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitButton = document.getElementById('submit-button');

function checkRequiredFields() {
  if (
    usernameInput.value.trim() !== '' &&
    passwordInput.value.trim() !== ''
  ) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

usernameInput.addEventListener('input', checkRequiredFields);
passwordInput.addEventListener('input', checkRequiredFields);
