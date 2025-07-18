alert('Bem vindo ao jogo do numero secreto');
let numeroMaximo = prompt('Escolha a dificuldade do jogo: qual o numero máximo?')
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n. s. 
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto 
    if(chute == numeroSecreto) {
       break; 
    } else {
        if (chute > numeroSecreto){
            alert(`Tente novamente, mas com um número menor que ${chute}`);
        } else {
            alert(`Tente novamente, mas com um número maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert('Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.');
//} else {
//    alert('Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.');
//}
