function afficherSombre(){
    document.body.classList.remove("clair");
    document.body.classList.add("sombre");
}

function afficherClair(){
    document.body.classList.remove("sombre");
    document.body.classList.add("clair");
}

function afficherTheme(){
    // Persistance des préférences "clair" si theme n'est pas généré
    const themeSauvegarde = localStorage.getItem("theme") || "clair";
    if(themeSauvegarde === "clair"){
        afficherClair();
    }else{
        afficherSombre();
    }
}

window.addEventListener("load", (e)=>{
    // Eviter le rechargement du formulaire
    e.preventDefault(); 

    afficherTheme();
});