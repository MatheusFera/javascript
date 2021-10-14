let amigo= {nome:'josé',
sexo: 'M',
idade: 30,
peso: 80,
engornar(p=0){
    console.log(`engordou ${p}Kg`)
    this.peso += p
}
}
console.log(`${amigo.nome} pesava ${amigo.peso} Kg`)
amigo.engornar(15)
console.log(`agora pesa ${amigo.peso}Kg`)