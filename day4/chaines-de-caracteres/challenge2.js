function compterLettre(chaine, lettre){
    let i=0
    let occ=0
    while(chaine[i]!=undefined){
        if(chaine[i]==lettre){
            occ++
        }
        i++
    }
    return occ
}

let str ="Hello World"

let nb= compterLettre(str,'l')

console.log(nb)


