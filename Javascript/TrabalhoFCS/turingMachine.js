/*
  Escolha a linguagem de programação de sua preferência e implemente uma das máquinas de turing estudadas em sala.
  Utilize arrays para representar as fitas.

  Além de responder o formuário o aluno deverá enviar o código e o programa compilado.
*/

// Máquina de Turing escolhida: transforma todos os 1 da fita em 0

const irADireita = () => ++i;
const irAEsquerda = () => --i;

const fita = [
  "#",
  "#",
  "#",
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  "b",
  "b",
  "b",
];

console.log(fita[fita.length + 1] == null);

var i = 0;

while (true) {
  if (fita[i] == "#") {
    fita[i] = "#";
    irADireita();
  } else if (fita[i] == 1) {
    fita[i] = 0;
    irADireita();
  } else if (fita[i] == 0) {
    fita[i] = 0;
    irADireita();
  } else if (fita[i] == "b") {
    fita[i] = "b";
    irAEsquerda();
    break;
  }
}

console.log(fita);
