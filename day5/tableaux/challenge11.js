function formaterChaine(tab){
    tab.shift()
    tab.pop()
    let str=tab.join("-")
    return str
}
console.log(formaterChaine(["Début", "JS", "PHP", "Fin"]))