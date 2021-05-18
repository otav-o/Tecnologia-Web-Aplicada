x = 5
console.log(x++); // 5
console.log(x); // 6

y = 5
console.log(++y) // 6
console.log(y) // 6


console.log(x);

++x // 6

x++ // 5
6

function verificar () {
    let a = '5';
    let b = 5;
    if (a == b)
        console.log(`${a} é igual a ${b} em valor`);
    else if (a === b)
        console.log(`${a} é igual a ${b} em valor e tipo`)
}

verificar();

const raiz_quadrada = (n) => Math.sqrt(n);
const potenciacao = (n, i) => Math.pow(n, i);

/* 
    Math.floor();
    Math.round();
    Math.random(); // número aleatório entre 0 e 1
    Math.
*/

0.654987897984654

const gerarAleatorio = () => Math.round(Math.random() * 10);


const gerarAleatorio = () => (Math.random() * 100).toFixed(0);

console.log(gerarAleatorio());

Math.max();
Math.min();

var dia = new Date();
dia.getDate();

const getData = () => {
    var data = new Date();
    console.log(data); // imprime muitas coisas

    console.log(data.getDate()); // dia do mês
    console.log(data.getDay()); // dia da semana
    console.log(data.getMonth() + 1); // lembrar que começa com 0. Somar um para saber o mês atual

    console.log(data.getFullYear());

    console.log(getDiaSemana(data.getDay()));
    console.log(getMes(data.getMonth()));

    console.log(data.getHours());
    console.lg
}

const getDiaSemana = (n) => {
    switch (n) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5: 
            return 'Sexta';
        case 6: 
            return 'Sábado';
    }
}

const getMes = (n) => {
    switch (n) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6: 
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
    }
}

getData();

a = 15;
b = '+';
c  = 100;

let y = a + b + c;
let z = eval(a + b + c);
let x = parseInt(a + b + c);

console.log(y);
console.log(z);
console.log(x);

// cuidado com o horário: é o mesmo da criação do objeto Date