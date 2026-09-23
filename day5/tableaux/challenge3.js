function trouverMax(tab){
    let max=0
    for(let i=0;i<tab.length;i++){
        if (tab[i]>max){
            max=tab[i]
        }
    }
    return max
}

console.log(trouverMax([10,20,80,30]))