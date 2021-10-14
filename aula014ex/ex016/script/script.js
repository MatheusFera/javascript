function contar(){
    var ini= document.getElementById('itxt')
    var fim= document.getElementById('ftxt')
    var passo= document.getElementById('ptxt')
    var res= document.getElementById('res')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){
        res.innerHTML='Impossivel contar'
    }else{
        res.innerHTML='Contando <br>'
        var i= Number(ini.value)
        var f= Number(fim.value)
        var p= Number(passo.value)
        
        if(p==0){
            alert('Passo inválido! Considerando Passo 1')
            p=1
        }
        if(i<f){
            for(var c=i ; c<=f; c+=p){
                res.innerHTML+=` \u{1F449} ${c} `
            }
        }else{
            for(var c=i ; c>=f; c-=p){
                res.innerHTML+=` \u{1F449} ${c} `
            }    
        }
        res.innerHTML+=` \u{1F3C1}`
    }
}