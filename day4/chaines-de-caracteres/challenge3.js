function inverserChaine(chaine){
    let str=""
    let j=chaine.length-1
    for(let i=0;i<chaine.length;i++){
        str+=chaine[j]
        j--
    }
    return str
}

console.log(inverserChaine("hello"))