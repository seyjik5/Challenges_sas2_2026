function calculerSomme(tab){
    let somme=0
    for(i=0;i<tab.length;i++){
        somme=somme+tab[i]
    }
    return somme
}

let tableau = [12,34,5,57,12,6,9]

console.log(calculerSomme(tableau))