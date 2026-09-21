const prompt=require("prompt-sync")();
let nbValeur=0
let nombre = 1
let somme =0

while (nombre != 0){
    nombre = Number(prompt("Saisie : "))
    if (nombre != 0){
        nbValeur++;
        somme = somme+nombre
    }
}
console.log("Nombre de valeurs : "+nbValeur)
console.log("Somme : "+somme)

