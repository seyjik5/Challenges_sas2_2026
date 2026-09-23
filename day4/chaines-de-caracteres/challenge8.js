function extraireChaine(chaine,debut,fin){
    let str=""
    for(let i=debut;i<fin;i++){
        str+=chaine[i]
    }
    return str

}

console.log(extraireChaine("javascript",0,4))