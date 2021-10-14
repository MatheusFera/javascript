let num= document.getElementById('txtn')
let res= document.getElementById('res')
let lista= document.getElementById('selnum')
let valores= []
let erro= 'Numero invalido ou ja encontrado na lista. Digite um número valido.'
let erro1= 'Adicione valores antes de finalizar!'
num.value=''
num.focus()

function isnum(n){
    if(Number(n) >= 1 && Number(n) <= 100 && num.value.length!=0){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function limpa(){
    num.value=''
    num.focus()
    lista.innerHTML= ''
    res.innerHTML=''
    valores=[]
}

function add(){
    if(isnum(num.value) && !inlista(num.value, valores)){
        let n= Number(num.value)
        let c= 1
        valores.push(n)
        let item= document.createElement('option')
        item.text= `Valor ${n} adicionado`
        item.value+= `lista{c}`
        lista.appendChild(item)
    }else{
        alert(erro)
    }
    num.value=''
    num.focus()
    res.innerHTML=''
}

function final(){
    if(valores.length==0){
        alert(erro1)
    }else{
        let total= valores.length
        let maior= valores[0]
        let menor= valores[0]
        let soma= 0
        let media= 0

        for(let pos in valores){
            soma+= valores[pos]
            media= soma/total
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos]< menor)
                menor= valores[pos]
        }

        res.innerHTML=``
        res.innerHTML+=`<p>a lista tem ${total} numeros</p>`
        res.innerHTML+=`<p>o maior valor foi ${maior}</p>`
        res.innerHTML+=`<p>o menor valor foi ${menor}</p>`
        res.innerHTML+=`<p>a soma dos valores é ${soma}</p>`
        res.innerHTML+=`<p>a media dos valores é ${media}</p>`
    }
}