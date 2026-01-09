const tableau = document.getElementById("tableau");
const grilleCartes = document.getElementById("grille-cartes");

async function downloadJson(){
    try {
            const url ="./promo.json";
            const reponse = await fetch(url); // promise
            // reponse.ok contient un booléen statuant s'il s'agit d'une réponse 
            // indiquant un succès (statut HTTP entre 200 et 299) ou non.
            if(!reponse.ok){
                throw new Error("Erreur chargement de données");
            }
            // reponse.json() prend le stream de la Response et le lit jusqu'à la fin. 
            // Renvoie une promise qui retourne le résultat du parsing 
            // du body text, comme JSON ,lorsqu'elle est résolue.
            const promoJson = await reponse.json();

            // Affichage des apprenants type liste
            await afficherListe(promoJson.apprenants, tableau);

            // Affichage des apprenants type cartes
            await afficherCartes(promoJson.apprenants, grilleCartes);

            await initialiserModale(promoJson.apprenants);

        } catch (error) {
            console.log(error.message);
    }
}

// Fonction liste

async function genererLigne(tab, data){
    const libelle = ["nom", "prenom", "ville"];
    const tr = document.createElement("tr");
    for (let index = 0; index <= libelle.length; index++) {
        if(index < libelle.length){

            const td = document.createElement("td");
            
            const texte = document.createTextNode(data[libelle[index]]);

            td.appendChild(texte);

            tr.append(td)

            tab.appendChild(tr);
        }else{
            const td = document.createElement("td");

            const ancre = document.createElement("a");
            ancre.setAttribute("href", "#");
            ancre.setAttribute("data-bs-toggle", "modal");
            ancre.setAttribute("data-bs-target", "#exampleModal");
            ancre.setAttribute("id", "liste-"+data["id"]);

            const details = document.createTextNode("Détail");
            ancre.appendChild(details);

            td.append(ancre);

            tr.append(td)

            tab.appendChild(tr);
        }
    }
}

async function afficherListe(data, tab){
    for (const apprenant of data) {
        await genererLigne(tab, apprenant);
    }
}

// Fonction cartes

async function genererCarte(grille, data){
    const colonne = document.createElement("div");
    const divHauteur = document.createElement("div");
    const carte = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const divBouton = document.createElement("div");
    const ancre = document.createElement("a");

    colonne.classList.add("col", "d-flex", "justify-content-center");
    divHauteur.classList.add("card", "h-100", "mx-auto");
    divHauteur.style.width = "12rem";
    carte.classList.add("card-body");
    h5.classList.add("card-title", "text-center");
    const nom = document.createTextNode(data["nom"]);
    p.classList.add("card-text", "text-center");
    const prenom = document.createTextNode(data["prenom"]);
    divBouton.classList.add("d-flex", "justify-content-center");
    ancre.classList.add("style", "menu", "btn-menu");
    ancre.setAttribute("href", "#");
    ancre.setAttribute("data-bs-toggle", "modal");
    ancre.setAttribute("data-bs-target", "#exampleModal");
    ancre.setAttribute("id", "carte-"+data["id"]);
    const details = document.createTextNode("Détails");

    grille.append(colonne);
    colonne.append(divHauteur);
    divHauteur.append(carte);
    h5.appendChild(nom);
    carte.append(h5);
    p.appendChild(prenom);
    carte.append(p);
    carte.append(divBouton);
    ancre.appendChild(details);
    divBouton.appendChild(ancre);
}

async function afficherCartes(data, grille){
    for (const apprenant of data) {
        await genererCarte(grille, apprenant);
    }
}

// Fonction modal

async function initialiserModale(data){
    document.getElementsByTagName("main")[0].addEventListener("click", (e)=>{
             
        const baliseId = e.target.id;
        
        if(baliseId.includes("-")){
            const apprenantId = baliseId.split("-")[1];
            for (const apprenant of data) {
                if(apprenant["id"] == apprenantId){
                    document.getElementById("nom").textContent = apprenant["nom"];
                    document.getElementById("prenom").textContent = apprenant["prenom"];
                    document.getElementById("ville").textContent = apprenant["ville"];

                    const img = document.getElementById("avatar");
                    if (apprenant["avatar"]) {
                        img.setAttribute("src", apprenant["avatar"]);
                    }
                    
                    document.getElementById("anecdotes").textContent = apprenant["anecdotes"];
                }
            }
        }      
    });
}

downloadJson();