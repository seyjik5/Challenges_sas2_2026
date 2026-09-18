const prompt=require("prompt-sync")();

let tension = Number(prompt("Tension : "));
let intensite = Number(prompt("Intensité : "));
let temps = Number(prompt("Temps : "));

let energie = tension*intensite*temps;

console.log("Energie")