function compterVoyelles(chaine){

    let voyelles="aeiouy"
    let nbVoyelles=0
    for(let i=0;i<chaine.length;i++){
        for(let j=0;j<voyelles.length;j++){
            if(chaine[i]==voyelles[j]){
                nbVoyelles++
                break
            }

        }
    }
    return nbVoyelles
}


console.log(compterVoyelles("developpeur"))