// LAÇOS DE REPETIÇÃO

/*1. Crie um código JS para gerar vários números aleatórios entre 0 e 100. Quando tivermos 10 números pares, exiba todos os números gerados e quais são os 10 números pares.*/

const gerarAleatorioAte100 = () => {
    return Math.floor(Math.random() * 100);
}

console.log(gerarAleatorioAte100());

let numerosSorteados = Array();
let numerosPares = Array();

while (numerosPares.length < 10) {
    let numero = gerarAleatorioAte100();
    numerosSorteados.push(numero);
    if (numero % 2 == 0) 
        numerosPares.push(numero);
}

document.getElementById('aleatorios').innerHTML = numerosSorteados;
document.getElementById('pares').innerHTML = numerosPares;

console.log(numerosPares);

const rodarQuestao = () => {
    if (document.getElementById('q2').checked)
        exercicio2();
    else if (document.getElementById('q3').checked)
        exercicio3();
    else if (document.getElementById('q4').checked)
        exercicio4();
}
var opcaoMarcada = document.getElementById('formulario').value;

/*2. Escreva um código para calcular a média de N números. Utilize uma janela de prompt para receber os números separados por vírgula. Exiba o resultado em uma janela de alerta.*/

const media = (nums) => 
(nums.reduce((a, b) => a + b, 0)) / nums.length;

function exercicio2 ()
{    
    let strNumeros = prompt('Digite os números separando por vírgula');

    let numeros = strNumeros.split(',')
        .map(n => parseInt(n));

    console.log(numeros);
    console.log(media(numeros));

    alert(`Os números digitados são ${numeros} e a média entre eles é ${media(numeros)}`)
}
 

/*3. Escreva um código em JS que leia um valor inteiro (aceitar somente valores entre 1 e 10). Escreva a tabuada de 1 a 10 do número lido.*/

function exercicio3() {
    let numero = parseInt(prompt('Digite um número inteiro entre 0 e 10'));
    if (numero < 0 || numero > 10) 
        throw 'Número inválido';
    alert(gerarTabuada(numero));
}

const gerarTabuada = numero => {
    let retorno = '';
    for (let i = 1; i < 11; i++)
        retorno += `${numero} x ${i} = ${numero * i}\n`;
    return retorno;
}

/*4. Escreva um código que receba a data de nascimento de uma pessoa. Em seguida, calcule a idade da pessoa e diga se ela é maior de idade(idade maior ou igual a 18 anos) ou menor de idade(idade menor que 18 anos).
OBS: Lembre-se que para calcular a idade de alguém basta subtrair o ano atual pelo ano de nascimento da pessoa, porém, caso o dia e o mês atual sejam menores que o dia e o mês de nascimento, a pessoa ainda não fez aniversário. Nesse caso, temos que subtrair 1 do ano*/

function exercicio4() {
    let data = new Date(prompt('Digite sua data de nascimento'));
    console.log(data);
    let idade = calcularIdade(data);
    alert(`Você tem ${idade} anos e ${idade > 18 ? 'é' : 'não é'} maior de idade`)
}

const calcularIdade = (data) => {
    let diferencaEmMilissegundos = new Date() - data;
    let diferencaEmAnos = diferencaEmMilissegundos / (3600 * 24 * 365 * 1000);
    console.log(diferencaEmAnos);
    return Math.floor(diferencaEmAnos);
}