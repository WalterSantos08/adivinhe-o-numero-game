var numeroachado = 0;
var tentativas = 0;

function refresh() {
    // Gera número aleatório entre 1 e 100
    attemps = 0;
    numeroachado = Math.floor(Math.random() * 100) + 1;

    console.log("Número gerado:", numeroachado); // Para depuração
}

function verifyNumber() {
    var bet = parseInt(document.getElementById('bet').value);

    if (isNaN(bet) || bet > 100 || bet < 1) {
        alert('Aposta inválida. Insira um número entre 1 e 100.');
        return;
    }

    tentativas++;

    if (bet > numeroachado) {
        alert('O número para ser encontrado é MENOR');
    } else if (bet < numeroachado) {
        alert('O número para ser encontrado é MAIOR');
    } else {
        alert(`Parabéns! Você encontrou o número com ${tentativas} tentativas.`);
        refresh(); // Reinicia o jogo
        tentativas = 0; // Zera as tentativas
    }
}

// Chama a função `refresh` quando o DOM estiver carregado
window.onload = refresh;
