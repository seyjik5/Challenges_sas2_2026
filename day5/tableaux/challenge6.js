function inverserTableau(tab){
    let array=[]
    let j=0
    for(let i =tab.length-1;i>=0;i--){
        array[j]=tab[i]
        j++
    }
    return array
}

console.log(inverserTableau([10,20,30]))