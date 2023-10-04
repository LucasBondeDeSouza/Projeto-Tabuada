const numero = document.getElementById('numero')
const resultado = document.getElementById('res')
const gerarBotao = document.getElementById('gerarTabuada');

function gerarTabuada() {

    if (numero.value.length == 0) {
        alert("Digite um Número")
        numero.value = ''

    } else if (numero.value <= 0) {
        alert("Digite um Número maior que 0")
        numero.value = ''

    } else if (numero.value.length > 10) {
        alert("Digite um Número com no máximo 10 digitos")
        numero.value = ''
        
    } else {
        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += `${numero.value} X ${i} = <strong>${numero.value * i}</strong><br><br>`
        }

        gerarBotao.style.display = 'none'
        numero.style.background = 'white'
        numero.disabled = true
    }
}

function limpar() {
    gerarBotao.style.display = 'block'
    numero.value = ''
    resultado.innerHTML = ''
    numero.disabled = false
}