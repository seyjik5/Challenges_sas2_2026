const prompt=require("sync-prompt")();

let longueur = Number(prompt("Longueur : "));
let largeur = Number(prompt("Largeur : "));

let surface = longueur * largeur;

let perimetre = 2*(longueur + largeur);

console.log("Surface :"+ surface);
console.log("Périmètre : "+perimetre)