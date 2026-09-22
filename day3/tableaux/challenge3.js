function trouverMax(tab){
    let max=0
    for (let i=0;i<tab.length;i++){
        if(tab[i]>max){
            max=tab[i]
        }
    }
    return max
}

let array=[1,4,55,29,36]

console.log(trouverMax(array))