function carregar(){
    var msg= document.getElementById('msg')
    var img= document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    var corpo= document.body
    var hora= 19
    msg.innerHTML= `são ${hora} horas, `

    if (hora <12){
        img.src= 'imagens/manha.png'
        corpo.style.background= '#E2CD9F'
        corpo.style.color= 'black'
        msg.innerHTML+='bom dia!'
    }else if(hora >12 && hora <18){
        img.src= 'imagens/tarde.png'
        corpo.style.background= '#B9846F'
        corpo.style.color= 'black'
        msg.innerHTML+='boa tarde!'
    }else{
        img.src= 'imagens/noite.png'
        corpo.style.background= '#193549'
        msg.innerHTML+='boa noite!'
    }
}