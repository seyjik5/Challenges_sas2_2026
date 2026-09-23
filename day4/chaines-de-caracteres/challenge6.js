function repeterChaine(chaine,num){
    let str=""
    
    for(let i=0;i<num;i++){
        str+=chaine
    }

    return str

}

console.log(repeterChaine("JS",3))