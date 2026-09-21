const prompt = require("prompt-sync")()

let nombre = Number(prompt("N = "))
let i=1
let res=1

while(i<=nombre){
    res=res*i
    i++
}
console.log(nombre+"! = "+res)