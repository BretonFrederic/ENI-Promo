async function afficherTitre(infosPromo) {
    const h1 = document.getElementById("titre");
    h1.textContent = `Promo ${infosPromo.promo[0]["nom"]}`;
}

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
            
            // Afficher titre h1
            await afficherTitre(promoJson);

        } catch (error) {
            console.log(error.message);
    }
}

downloadJson();