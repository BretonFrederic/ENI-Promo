const themes = document.getElementById("theme");
const affichages = document.getElementsByClassName("affichage");
const enregistrer = document.getElementById("enregistrer");

themes.value = localStorage.getItem("theme") || "clair";
 
for (const affichage of affichages) {
    if(affichage.value == localStorage.getItem("affichage") ){
        affichage.checked = true;
    }
}

function stockerTheme(){
    localStorage.setItem("theme", themes.value);
}

function stockerAffichage(){
    for (const affichage of affichages) {
        if(affichage.checked){
            localStorage.setItem("affichage", affichage.value);
        }
    }
}

enregistrer.addEventListener("click", ()=>{
    stockerTheme();
    stockerAffichage();
});

// Appliquer theme ponctuellement

function afficherSombre(){
    document.body.classList.remove("clair");
    document.body.classList.add("sombre");
}

function afficherClair(){
    document.body.classList.remove("sombre");
    document.body.classList.add("clair");
}

function afficherTheme(){
    const themeSelect = document.getElementById("theme");
    if(themeSelect === "clair"){
        afficherClair();
    }else{
        afficherSombre();
    }
}

document.getElementById("prefs-form").addEventListener("focus", ()=>{
    afficherTheme();
})

