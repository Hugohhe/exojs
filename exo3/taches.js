// Récupération des éléments du DOM
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
// Fonction pour ajouter une tâche
function tache(){
    let li = document.createElement("li");
    li.innerText=taskInput.value;
    taskList.appendChild(li);
}
// Ajout de l'événement au bouton "Ajouter"
addTaskButton.addEventListener('click', () => {
        // Votre code ici
        tache()
});
// Ajout de la tâche en appuyant sur "Entrée"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // Votre code ici
        tache()                 
    }
});

