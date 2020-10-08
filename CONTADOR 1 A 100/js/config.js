
var n = document.getElementById('num')
var sel = document.getElementById('selec')
var res = document.getElementById('res')
let valores = []
function adicion(){
if(isnumero(n.value) && !insel(n.value, valores)){  //simplesmente esqueci de declarar adicionar no vetor kkkkkkkk
    valores.push(Number(n.value))        //vetor recebe adicionar(push) numeros(Number(n.value)) com valor digitados
    let item = document.createElement('option')   //criador de elemento do javascript
    item.text = `Valor ${n.value} adicionado!`
    sel.appendChild(item)  //criou uma filho div
    //res.innerHTML = ''  //professor ta dando!!!isso aqui zera os numeros e nao da para ver
}else{
    alert('Valor inválido ou já encomtrado na Lista!')
}
n.value = ''   //tag geralmente usada no javascript para esvaziar(n recebe valor = vazio(' '))
n.focus()   //tag usada para focalizar o cursor novamente na caixa de texto

}


function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function insel(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function finalizar(){   //botão feito para finalizar 
    if (valores.length == 0){    //se valores(vetor) for igual a 0 
        window.alert('Adicione valores para finalizar!')   //mensagem alert
    }else{
        let total = valores.length   //no caso todos os valores na variavel (total)
        let soma = 0
        let media = 0
        let maior = valores[0]          //<<<<===
        let menor = valores[0]          //<<<<===
        for(let pos in valores){  
            soma += valores[pos]
            if (valores[pos] > maior)   //<<<<===
            maior = valores[pos]        //<<<<===     
            if (valores[pos] < menor)   //<<<<===
            menor = valores[pos]        //<<<<===       //função o qual analisa e ve quem e o numero maior e menor
            res.innerHTML = ''
        }
        media = soma / total
        res.innerHTML = ''  //forma de zerar/res recebe vazio some o que foi escrito
        res.innerHTML += `<p>Ao todo temos ${total} total de números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores foi ${media}</p>`
        
    }
}



