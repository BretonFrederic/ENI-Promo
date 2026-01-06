const description = document.getElementById("description");
const liensUtiles = document.getElementById("liens-utiles");

// Données de description
let texteDesc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis totam incidunt labore laboriosam. Neque harum dolorem quam sed. Ad pariatur quisquam esse eos ea excepturi neque, sunt obcaecati iusto aut doloribus voluptates ut veritatis unde deleniti facilis ducimus labore repudiandae aliquid necessitatibus accusamus harum autem iste. Vitae accusantium nobis, itaque in quibusdam porro sapiente possimus iusto reprehenderit autem, aliquid eos odit quas architecto necessitatibus, tempore vel deleniti quidem incidunt tenetur magnam voluptas harum? Perspiciatis distinctio culpa veniam vitae. Doloremque amet voluptatem debitis consequatur accusamus eum."

// Données clés valeurs pour les liens utiles
let listeLiens = new Map();
listeLiens.set('zestedesavoir', 'https://zestedesavoir.com/bibliotheque/?type=tutorial')
listeLiens.set('git', 'https://git-scm.com/book/fr/v2')
listeLiens.set('sql.sh', 'https://sql.sh/')
listeLiens.set('cyril-gruau ConceptionBD', 'https://cyril-gruau.developpez.com/uml/tutoriel/ConceptionBD/')
listeLiens.set('pierre-giraud', 'https://www.pierre-giraud.com/html-css-apprendre-coder-cours/')

// Afficher le contenu de description
description.textContent = texteDesc;

// Générer et afficher les liens utiles dans la zone de texte
for (const [key, value] of listeLiens) {
    const nouveauLien = document.createElement('a');
    nouveauLien.setAttribute('href', value);
    nouveauLien.textContent = key;
    nouveauLien.target = "_blank";
    nouveauLien.rel = "noopener noreferrer"; // Empêche les onglets ou fenêtres nouvellement ouverts de contrôler la page d’origine

    liensUtiles.appendChild(nouveauLien);
    liensUtiles.appendChild(document.createElement('br'));
}
