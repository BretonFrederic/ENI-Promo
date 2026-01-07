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
