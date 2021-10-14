let num = [5,1,4,2,3]
console.log(num)
//num.sort()
console.log(`nosso vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(`vetor ordenado ${num}`)

let pos = num.indexOf(6)
if(pos==-1){
    console.log('o valor nao existe')
}else{
    console.log (`o valor está na posiçao ${pos}` )
}
