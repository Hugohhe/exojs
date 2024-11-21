// Mot de passe correct
function correct(){
    message.innerText = "c'est bon gros connard";
}
function incorrect(){
    message.innerText = "Va te faire enculer ";
}
// Récupération des éléments du DOM
let password = document.getElementById("passwordInput");
let checkbutton = document.getElementById("checkButton");
let message = document.getElementById("message");
// Fonction pour vérifier le mot de passe
let mdp = 1234;
function verifmdp(){
    if(password.value == mdp){
        correct();
    } else {
        incorrect();
    }
}
// Ajout de l'événement au bouton
checkbutton.addEventListener("click", function(){
    verifmdp();
})
