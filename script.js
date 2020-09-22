function contar(){
    let ini = document.getElementById('txti') // let variavel
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivél contar'
     //   window.alert('[ERRO] faltam dados!!')
       

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if ( i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` // se usa crase
        }
        
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1F449}`

            }
        
        }    
        res.innerHTML += `\u{1F3C1}`
    }
}