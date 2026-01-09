const description = document.getElementById("description");
const liensUtiles = document.getElementById("liens-utiles");

async function afficherInfos(infosPromo) {
    const datesFormation = document.getElementById("dates");

    const dateDebut = Date.parse(infosPromo.promo[0]["dateDebut"]);
    const dateFin = Date.parse(infosPromo.promo[0]["dateFin"]);
    const nombreApprenants = document.getElementById("nombre-apprenants");
    const description = document.getElementById("description");

    const dateDebutFr = new Date(dateDebut).toLocaleDateString("fr-FR");
    const dateFinFr = new Date(dateFin).toLocaleDateString("fr-FR");

    datesFormation.textContent = `Formation du ${dateDebutFr} au ${dateFinFr}`;

    nombreApprenants.textContent = `Nombre d'apprenants :  ${infosPromo.promo[0]["nombreApprenants"]}`;

    description.textContent = infosPromo.promo[0]["description"];
    
    // Générer et afficher les liens utiles
    infosPromo.promo[0].liensUtiles.forEach(lien => {
        const ancre = document.createElement('a');
        ancre.setAttribute("href", lien["url"]);
        ancre.setAttribute("target", "_blank");
        ancre.setAttribute("rel", "noopener noreferrer");
        ancre.textContent = lien["nomSite"];
        liensUtiles.appendChild(ancre);
    });


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

            // Affichage des informations générales
            await afficherInfos(promoJson);

        } catch (error) {
            console.log(error.message);
    }
}

downloadJson();
