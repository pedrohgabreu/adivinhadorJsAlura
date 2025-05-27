alert ('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random() * numeroMaximo) + 1;
let chute;
let tentativas = 0;


while (numeroSecreto != chute){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
        break;
    } else {
        if (chute > numeroSecreto){
            alert('o numero secreto eh menor que ' + chute);
            tentativas++;
        } else {
            alert('o numero secreto eh maior que ' + chute);
            tentativas++
        }

    }

    }