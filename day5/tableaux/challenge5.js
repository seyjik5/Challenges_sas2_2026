function contientElement(tab,valeur){

    exist=false
    for(let i=0;i<tab.length;i++){
        if (tab[i]==valeur){
            exist=true
        }
    }
    return exist
}

console.log(contientElement([10,"hello",8],"hello"))