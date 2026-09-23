function remplacerCaractere(chaine, ancien, nouveau){
    let str=""
    for(let i=0;i<chaine.length;i++){
        if(chaine[i]==ancien){
            str+=nouveau
        }else{
            str+=chaine[i]
        }
    }
    return str
}


console.log(remplacerCaractere("banana",'a','o'))