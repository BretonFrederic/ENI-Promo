/*
async function chargerlieux(data){
    const lieux = data.map((apprenant)=>{
        return {
            ville: apprenant.ville,
            coordonnees: apprenant.coordonnees
        };
    });
    return lieux;
}
*/
async function afficherlieux(apprenants){
    // Initialisation de la carte
    const map = L.map('map').setView([46.232192999999995, 2.209666999999996], 5); // Paris

    // Fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Boucle pour créer les marqueurs
    
    apprenants.forEach(infos => {
    L.marker([infos.coordonnees.latitude, infos.coordonnees.longitude])
        .addTo(map)
        .bindPopup(`<b>${infos.nom} ${infos.prenom}</b>`);
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

            // Affichage de la localisation des apprenants sur une carte
            //const lieuxApprenants = await chargerlieux(promoJson.apprenants);
            
            await afficherlieux(promoJson.apprenants);

        } catch (error) {
            console.log(error.message);
    }
}

downloadJson();