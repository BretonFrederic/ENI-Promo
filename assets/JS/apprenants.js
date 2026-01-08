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
            await afficherListe(promoJson.apprenants);

            // Affichage des apprenants type cartes

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

            const texte = document.createTextNode("Détail");
            ancre.appendChild(texte);

            td.append(ancre);

            tr.append(td)

            tab.appendChild(tr);
        }
    }
}

async function afficherListe(data){
    for (const apprenant of data) {
        await genererLigne(tableau, apprenant);
    }
}

// Fonction cartes

async function genererCarte(tab, data){
    //
}

async function afficherCartes(){
    //
}




downloadJson();