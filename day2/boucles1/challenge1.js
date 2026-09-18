const prompt = require("prompt-sync")();

let nbParticipants = Number(prompt("Nombre de participants : "));

for (let i=1;i<=nbParticipants;i++){
    console.log("Participant : "+i);

}