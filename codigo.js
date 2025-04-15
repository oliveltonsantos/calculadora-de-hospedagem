function calculo() {
    var txt1ano = document.getElementById('txt1ano')
    var txt2anos = document.getElementById('txt2anos')
    var txt4anos = document.getElementById('txt4anos')

    var txt1anorenovacao = document.getElementById('txt1anorenovacao')
    var txt2anosrenovacao = document.getElementById('txt2anosrenovacao')
    var txt4anosrenovacao = document.getElementById('txt4anosrenovacao')

    var plano1ano = Number(txt1ano.value)
    var plano2anos = Number(txt2anos.value)
    var plano4anos = Number(txt4anos.value)

    var plano1anorenovacao = Number(txt1anorenovacao.value)
    var plano2anosrenovacao = Number(txt2anosrenovacao.value)
    var plano4anosrenovacao = Number(txt4anosrenovacao.value)

    var res = document.querySelector('div.res')

    if (txt1ano.value == '' || txt1ano.value <= 0 || txt2anos.value == '' || txt2anos.value <= 0 || txt4anos.value == '' || txt4anos.value <= 0 || txt1anorenovacao.value == '' || txt1anorenovacao.value <= 0 || txt2anosrenovacao.value == '' || txt2anosrenovacao.value <= 0 || txt4anosrenovacao.value == '' || txt4anosrenovacao.value <= 0) {
        window.alert('Digite os valores nos campos!')
    } else {
        var valorPlano1ano = plano1ano * 12
        var valorPlano2anos = plano2anos * 24
        var valorPlano4anos = plano4anos * 48

        var valorRenovacao1ano = plano1anorenovacao * 12
        var valorRenovacao2anos = plano2anosrenovacao * 24
        var valorRenovacao4anos = plano4anosrenovacao * 48

        res.innerHTML = `<p><strong>PLANO 1 ANO:</strong></p> 
        
        <p>- Atual: ${valorPlano1ano.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <br> - Renovação: ${valorRenovacao1ano.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`

        res.innerHTML += `<p><strong>PLANO 2 ANOS:</strong></p> 
        
        <p>- Atual: ${valorPlano2anos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <br> - Renovação: ${valorRenovacao2anos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`

        res.innerHTML += `<p><strong>PLANO 4 ANOS:</strong></p> 
        
        <p>- Atual: ${valorPlano4anos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <br> - Renovação: ${valorRenovacao4anos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`

    }
}

function limpar() {
    var txt1ano = document.getElementById('txt1ano')
    var txt2anos = document.getElementById('txt2anos')
    var txt4anos = document.getElementById('txt4anos')

    var txt1anorenovacao = document.getElementById('txt1anorenovacao')
    var txt2anosrenovacao = document.getElementById('txt2anosrenovacao')
    var txt4anosrenovacao = document.getElementById('txt4anosrenovacao')

    var res = document.querySelector('div.res')

    txt1ano.value = ''
    txt2anos.value = ''
    txt4anos.value = ''

    txt1anorenovacao.value = ''
    txt2anosrenovacao.value = ''
    txt4anosrenovacao.value = ''

    res.innerHTML = ''

    txt1ano.focus()

}