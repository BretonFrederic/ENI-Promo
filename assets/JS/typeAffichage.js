const affichages = document.getElementsByClassName("affichage");
const formAffichage = document.getElementById("form-affichage");
const affichageType = document.getElementsByClassName("affichage-type");


// Persistence type affichage
for (const affichage of affichages) {
    if(affichage.value == localStorage.getItem("affichage")){
        affichage.checked = true;
    }
}

/* Fonctions */

function appliquerAffichage(){
    for (const affichage of affichages) {
        
        if(affichage.checked){
            affichageType[0].hidden = (affichageType[1].getAttribute("id") == affichage.value);
            affichageType[1].hidden = (affichageType[0].getAttribute("id") == affichage.value);
        }
    }
}

window.addEventListener("load", (e)=>{
    // Eviter le rechargement du formulaire
    e.preventDefault(); 

    appliquerAffichage();
});

// Appliquer type affichage ponctuellement
formAffichage.addEventListener("change", ()=>{
    appliquerAffichage();
});
