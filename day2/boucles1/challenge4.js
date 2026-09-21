const prompt = require("prompt-sync")();

let number = Number(prompt("Nombre : "));

for (let i = 1; i<=10;i++){
    console.log(number+" x "+i+" = "+number*i)
}