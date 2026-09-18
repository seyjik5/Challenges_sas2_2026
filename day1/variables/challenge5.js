const prompt=require('prompt-sync')();

let duree = prompt("Durée : ");

if (duree<60){

    console.log("Catégorie : Court métrage");

}else if(duree<120){

    console.log("Catégorie : Film standard");

}
else{

    console.log("Catégorie : Film long");
}
