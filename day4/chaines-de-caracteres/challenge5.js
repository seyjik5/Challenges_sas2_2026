function estPalindrome(chaine){
    let isPal=true
    let j = chaine.length-1
    for(let i =0;i<chaine.length/2;i++){
        if(chaine[i]!=chaine[j]){
            isPal=false
            break
        }
        j--
    }
    return isPal
}

console.log(estPalindrome("radar"))