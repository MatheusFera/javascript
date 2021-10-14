var agora= new Date()
var hora= agora.getHours()
var corpo= document.body
var h= document.querySelector('section#dia')
var p1= document.getElementsByTagName('p')[1]

p1.innerHTML (`são ${hora} horas`)

if (hora <12){
    corpo.style.background= 'yellow'
    p1.innerHTML('bom dia')
}else if(hora >12 && hora <18){
    corpo.style.background= 'blue'
    p1.innerHTML('boa tarde')
}else{
    corpo.style.background= 'gray'
    p1.innerHTML('boa noite')
}