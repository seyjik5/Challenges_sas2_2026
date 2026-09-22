const prompt = require("prompt-sync")();

let rayon = Number(prompt("Rayon : "));
let hauteur = Number(prompt("Hauteur : "));

let pi=3.14159;

let volume = pi * Math.pow(rayon,2) * hauteur;

console.log("Volume : "+volume);

