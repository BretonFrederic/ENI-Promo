function afficherSombre(){
    document.body.classList.remove("clair");
    document.body.classList.add("sombre");
}

function afficherClair(){
    document.body.classList.remove("sombre");
    document.body.classList.add("clair");
}

function sauvegarderTheme(){
    // Persistance des préférences "clair" si theme n'est pas généré
    return localStorage.getItem("theme") || "clair";
}

function afficherTheme(theme){

    if(theme === "clair"){
        afficherClair();
    }else{
        afficherSombre();
    }
}

window.addEventListener("load", (e)=>{
    // Eviter le rechargement du formulaire
    e.preventDefault(); 
    const themeSauvegarde = sauvegarderTheme();
    afficherTheme(themeSauvegarde);
});