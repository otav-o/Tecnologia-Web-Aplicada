/*
    Implemente uma função em JS que receba 1 número qualquer (através de uma janela de prompt) e exiba a raiz quadrada dele.
    OBS: A exibição poderá ser feita através do console ou de uma janela de alerta.
    Use a função Math.sqrt(n) onde n é o número para calcular a raiz quadrada.
*/

const raizQuadrada = () => {
    let n = prompt("Digite um número");
    alert(Math.sqrt(n))
};

/*
    Crie código em Javascript que receba dois números e mostre a média entre eles.
*/

const calculaMedia = (...numeros) => {
    const n1 = parseFloat(prompt("Primeiro número"));
    const n2 = parseFloat(prompt("Segundo número número"));
    alert((n1 + n2) / 2);
};

/* 
    Crie um código em Javascript que receba uma palavra e exiba a quantidade de letras que ela tem.
*/

function quantidadeLetras() {
    let palavra = prompt("Digite algo");
    alert(`"${palavra}" tem ${palavra.length} letras!`);
}

/*
    
    Crie um objeto que receberá o nome e sobrenome de uma pessoa. Exiba a mensagem ‘Olá’ juntamente com o nome e sobrenome da pessoa.

*/

const funcao4 = () => {
    var p = new Pessoa(prompt("Digite o nome"), prompt("Digite o sobrenome"));
    alert(`Olá, ${p.nome} ${p.sobrenome}.`)
}

function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
