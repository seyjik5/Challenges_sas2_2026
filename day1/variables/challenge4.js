const prompt = require('prompt-sync')();

let distance=prompt("distance : ");

let carburant=prompt("carburant : ");

let consomation;

consomation = Math.trunc((carburant/distance) * 100);

console.log(consomation+" L"+"/100 km");