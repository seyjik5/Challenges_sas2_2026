const prompt =require("prompt-sync")()

let base=Number(prompt("Base : "))
let exposant = Number(prompt("Exposant : "))

let res=1
let i =0

while( i<exposant ){
    res = res * base
    i++
}

console.log("Résultat : "+res)



