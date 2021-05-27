function primeiro() {
  let pares = [];
  let numeros = [];
  let i = 0;
  let j = 0;

  while (pares.length != 10) {
    numeros[j] = (Math.random() * 100).toFixed(0);
    if (numeros[i] % 2 == 0) {
      pares[j++] = numeros[i];
    }
    i++;
  }

  console.log("Os números gerados são: " + numeros);
  console.log("Os pares são: " + pares);
}

function terceiro() {
  let numero = prompt("Digite um número entre 1 e 10");

  if (numero > 1 && numero <= 10) {
    for (let i = 0; i < 10; i++) {
      console.log(numero + "x" + (i + 1) + "=" + numero * (i + 1));
    }
  } else {
    alert("Você não digitou o número correto!");
  }
}

function quarto() {
  let nascimento = prompt(
    "Digite sua data de nascimento no formato dd/mm/aaaa"
  );

  nascimento = nascimento.split("/");

  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let idade = ano - nascimento[2];

  if (nascimento[1] > mes) idade--;
  else {
    if (nascimento[1] == mes && nascimento[0] > dia) {
      // se a pessoa ainda não fez aniversário
      idade--;
    }
  }

  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }

  console.log(idade);
}
