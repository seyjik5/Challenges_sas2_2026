const prompt = require("prompt-sync")();

let nombre = Number(prompt("Départ : "))

while(nombre >=0){
    console.log(nombre)
    nombre--
}