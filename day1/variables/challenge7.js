const prompt=require('prompt-sync')();

let noteCC=Number(prompt("Contrôle continu : "));

let noteProjet=Number(prompt("Projet : "));

let noteExam=Number(prompt("Examen : "));

let noteFinal = (noteCC * 2 +noteProjet * 3 + noteExam * 5) / 10;

console.log("Note finale : "+noteFinal);