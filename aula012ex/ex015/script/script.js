function ver(){
    var data= new Date() 
    var ano= data.getFullYear()
    var fano= document.getElementById('anotxt')
    var res= document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('Erro! Verifique os dados e tente novamente')
    }else {
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero= ''
        var img= document.createElement('img')
        if(fsex[0].checked){
            genero= 'um homem'
            if(idade <=10){
                img.setAttribute('src', 'imagens/menino.jpg')
            }else if(idade < 18){
                img.setAttribute('src', 'imagens/moço.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto.jpg')
            }else if(idade>50){
                img.setAttribute('src', 'imagens/velho.jpg')
            }
        }else{
            genero= 'uma mulher'
            if(idade <=10){
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if(idade < 18){
                img.setAttribute('src', 'imagens/moça.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulta.jpg')
            }else if(idade> 50){
                img.setAttribute('src', 'imagens/velha.jpg')
            }
        }
        res.innerHTML= `é ${genero} de ${idade} anos. `
        res.appendChild(img)
    }
}