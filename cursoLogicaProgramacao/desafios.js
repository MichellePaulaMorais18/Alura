alert("Boas vindas ao nosso site!");

let nome = prompt("Qual seu nome?");
let idade = prompt(`Qual sua idade, ${nome}?`);;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

console.log(`${nome}, Boas Vindas!`)

let mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

let sobrenome = prompt(`Qual seu sobrenome, ${nome}?`);
let ddd = prompt("Qual seu DDD?");

if (ddd == 62) {
    alert("Você está em Goiânia!");
} else {
    alert("Você não está em Goiânia!");
}

let diaSemana = prompt("Qual o dia de hoje da semana?");

if (diaSemana == "sabado" || diaSemana == "domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

let numero = prompt("Qual o número que você deseja verificar?");

let tipoNumero = numero % 2 == 0 ? 'par' : 'impar';
alert(`O número é ${tipoNumero}!`);

if (numero > 0) {
    alert("O número é positivo!");
} else if (numero < 0) {
    alert("O número é negativo!");
} else {
    alert("O número é zero!");
}

let numeroEscolhido = prompt(`${nome}, escolha um numero de até 50`);
let contagemprog = parseInt(numeroEscolhido);
let contagemreg = parseInt(numeroEscolhido);
let numeroAleatorio = parseInt(Math.random() * numeroEscolhido + 1);

console.log(numeroAleatorio);

while (contagemprog < 50) {
    console.log(contagemprog);
    contagemprog = contagemprog + 5;
}

while (contagemreg > 0) {
    console.log(contagemreg);
    contagemreg = contagemreg - 5;
}

let soma =  parseInt(numeroEscolhido) + parseInt(numeroAleatorio);
let subtracao = numeroEscolhido - numeroAleatorio;
let multiplicacao = numeroEscolhido * numeroAleatorio;
let divisao = numeroEscolhido / numeroAleatorio;
console.log(`${nome}, o resultado da soma do seu numero ${numeroEscolhido} mais o aleatório é ${soma}`);
console.log(`${nome}, o resultado da subtração do seu numero ${numeroEscolhido} mais o aleatório é ${subtracao}`);
console.log(`${nome}, o resultado da multiplicação do seu numero ${numeroEscolhido} mais o aleatório é ${multiplicacao}`);
console.log(`${nome}, o resultado da divisão do seu numero ${numeroEscolhido} mais o aleatório é ${divisao}`);