const prompt=require("prompt-sync")();

let n = Number(prompt("N : "));

let somme=0;

for(let i=1;i<=n;i++){
    somme = somme+i;
}

console.log("Somme : "+somme);