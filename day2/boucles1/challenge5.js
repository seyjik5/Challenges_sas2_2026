const prompt=require("prompt-sync")();

let n=Number(prompt("N : "));
let x=Number(prompt("X : "));

let nbTotal=0;

for(let i=x;i<=n;i=i+x){

    console.log(i);
    nbTotal=nbTotal+1;
}




console.log("Nombre totale : "+nbTotal);