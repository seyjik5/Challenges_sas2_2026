const prompt = require("prompt-sync")()

let num = Number(prompt("nombre : "))
let isPremier=true
for (i=2;i<=num/2;i++){
    if (num%i==0){
        isPremier=!isPremier
        break
    }
}
if(isPremier){
    console.log("premier")
}else{
    console.log("pas premier")
}