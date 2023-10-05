// ██╗      █████╗ ██████╗ ███████╗██╗         ██████╗ ██╗██████╗ ████████╗██╗  ██╗██████╗  █████╗ ██╗   ██╗
// ██║     ██╔══██╗██╔══██╗██╔════╝██║         ██╔══██╗██║██╔══██╗╚══██╔══╝██║  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
// ██║     ███████║██████╔╝█████╗  ██║         ██████╔╝██║██████╔╝   ██║   ███████║██║  ██║███████║ ╚████╔╝ 
// ██║     ██╔══██║██╔══██╗██╔══╝  ██║         ██╔══██╗██║██╔══██╗   ██║   ██╔══██║██║  ██║██╔══██║  ╚██╔╝  
// ███████╗██║  ██║██████╔╝███████╗███████╗    ██████╔╝██║██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║   ██║   
// ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝    ╚═════╝ ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
//                                                                                                          

const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");


function generateOptions(select, start, end) {
  for (let i = start; i <= end; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
}

generateOptions(daySelect, 1, 31);

const months = [
  "Janvier", "Février", "Mars", "Avril",
  "Mai", "Juin", "Juillet", "Août",
  "Septembre", "Octobre", "Novembre", "Décembre"
];
months.forEach((month, index) => {
  const option = document.createElement("option");
  option.value = index + 1;
  option.text = month;
  monthSelect.appendChild(option);
});

const currentYear = new Date().getFullYear();
generateOptions(yearSelect, 1900, currentYear);