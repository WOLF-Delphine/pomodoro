const tbxPhrase =[
    "« Le succès est la somme de petits efforts, répétés jour après jour. »" ,
    "« Ne vous arrêtez pas lorsque vous êtes fatigué. Arrêtez-vous lorsque vous avez terminé. »",
    "« Le seul endroit où le succès précède le travail est dans le dictionnaire. »" ,
    "« Vous devez vous lever chaque matin avec détermination si vous voulez vous coucher avec satisfaction. »" ,
    "« Ce qui est gagné avec beaucoup de travail est plus aimé. »"
];


console.log(tbxPhrase.length);
console.log(tbxPhrase[0]);
console.log(tbxPhrase[4]);

const texte =
document.getElementById("phrase-du-jour");
texte.textContent=tbxPhrase[1];
console.log(texte.textContent);

const tbxAuteur =["Leo Robert Collier","Inconnu","Vidal Sassoon","George Lorimer","Inconnu" ];

const auteur=
document.getElementById("auteur-du-jour");
auteur.textContent=tbxAuteur[1];