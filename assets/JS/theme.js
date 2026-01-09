
function sauvegarderTheme(){
    // Persistance des préférences "clair" si theme n'est pas généré
    return localStorage.getItem("theme") || "clair";
}

function afficherTheme(theme){
    document.body.classList.remove("sombre", "clair");
    theme === "clair" ? document.body.classList.add(theme) : document.body.classList.add("sombre");
}

window.addEventListener("DOMContentLoaded", (e)=>{
    // Eviter le rechargement du formulaire
    e.preventDefault(); 
    const themeSauvegarde = sauvegarderTheme();
    afficherTheme(themeSauvegarde);
});

