function nettoyerEspaces(chaine){
    let i=0
    let indexDebut=0
    while(chaine[i]== " "){
        indexDebut++
        i++
    }
    let indexFinFromRight=0
    let indexFin=0

    i=chaine.length-1
    while(chaine[i]==" "){
        indexFinFromRight++
        i--
    }
    indexFin=chaine.length-indexFinFromRight-1

    let str=""
    for(let j=indexDebut;j<=indexFin;j++){
        str+=chaine[j]
    }
    return str
}

let chaine = "   hello world   "


console.log(nettoyerEspaces(chaine))
