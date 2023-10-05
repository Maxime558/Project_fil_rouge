const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Fonction pour générer les options pour les jours, mois et années
function generateOptions(select, start, end) {
  for (let i = start; i <= end; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
}

// Générer les options pour les jours (1 à 31)
generateOptions(daySelect, 1, 31);

// Générer les options pour les mois (janvier à décembre)
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

// Générer les options pour les années (de 1900 à l'année actuelle)
const currentYear = new Date().getFullYear();
generateOptions(yearSelect, 1900, currentYear);