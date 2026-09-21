const prompt=require("prompt-sync")();

let i=1
let score=0
let nbMission = Number(prompt("Nombre de missions : "))

while (i<= nbMission){

    score = i*100
    console.log("Mission "+i+" -> Score : "+score)
    i++
}