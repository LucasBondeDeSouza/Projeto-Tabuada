document.addEventListener('DOMContentLoaded', function() {
    const numero = document.getElementById('numero');
    const resultado = document.getElementById('res');
    const gerarBotao = document.getElementById('gerarTabuada');
    const limparBotao = document.getElementById('limpar');

    gerarBotao.addEventListener('click', gerarTabuada);
    limparBotao.addEventListener('click', limpar);

    function gerarTabuada(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário, se houver

        if (numero.value.length == 0) {
            alert("Digite um Número");
            numero.value = '';
        } else if (numero.value <= 0) {
            alert("Digite um número maior que 0");
            numero.value = '';
        } else {
            resultado.innerHTML = ''; // Limpar resultados anteriores
            for (let i = 1; i <= 10; i++) {
                resultado.innerHTML += `${numero.value} X ${i} = <strong>${numero.value * i}</strong><br><br>`;
            }
            gerarBotao.style.display = 'none';
            numero.disabled = true; // Desabilitar o input
        }
    }

    function limpar(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário, se houver

        gerarBotao.style.display = 'block';
        numero.value = '';
        resultado.innerHTML = '';
        numero.disabled = false; // Habilitar o input novamente
    }
})