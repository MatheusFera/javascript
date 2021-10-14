function parimp(n){
    if(n==0){
        console.log(`${n} é neutro`)
    }
    if(n>0 && n%2==0){
        return `${n} é par`
    }else if(n>0 && n%2!=0){
        return `${n} é impar`
    }
}

console.log(parimp(0))