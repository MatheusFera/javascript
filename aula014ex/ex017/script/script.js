function gerar(){
    var n= document.getElementById('numtxt')
    var r= document.getElementById('res')
    var tab= document.getElementById('seltab')

    if(n.value.length==0){
        alert ('Por favor digite um numero')
    }else{
        var num= Number(n.value)
        tab.innerHTML= ''
        for(var c= 1; c<= 10; c++){
            var item= document.createElement('option')
            item.text = ` ${num} x ${c} = ${num*c}`
            item.value= `tab{c}`         
            tab.appendChild(item)
        }
    }
}