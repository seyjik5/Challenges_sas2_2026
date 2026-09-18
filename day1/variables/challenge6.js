const prompt=require('prompt-sync')();

let score_1=Number(prompt("Partie 1 : "));
let score_2=Number(prompt("Partie 2 : "));
let score_3=Number(prompt("Partie 3 : "));
let score_4=Number(prompt("Partie 4 : "));

let score_total;


score_total = score_1+score_2+score_3+score_4;


let moyenne = score_total/4;

console.log("Score total : "+score_total);
console.log("Moyenne : "+moyenne);

