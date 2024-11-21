// Initialisation du compteur
let counter = 0 

// Récupération des éléments du DOM
let compteur = document.getElementById("compteur");
let augmenter = document.getElementById("increment");
let diminuer = document.getElementById("decrement");
// Fonction pour mettre à jour l'affichage du compteur
function maj(){
    compteur.innerText = counter
}
// Fonction pour augmenter le compteur
function augmente(){
    counter++;
    maj()
}
// Fonction pour diminuer le compteur
function diminue(){
    counter--;
    maj()
}
// Ajout des événements aux boutons
augmenter.addEventListener("click", function(){
    augmente()
})

diminuer.addEventListener("click", function(){
    diminue()
})
// Initialisation de l'affichage

