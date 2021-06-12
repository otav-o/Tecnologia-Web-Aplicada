const inicio = () => {
  gerarElemento({
    tag: "button",
    id: "botao-adivinhar",
    conteudo: "Tente adivinhar",
  });
  document
    .getElementById("botao-adivinhar")
    .setAttribute("onclick", "adivinharNumero(0, 100)");

  gerarInput("date", "nascimento", 'mostrarSigno()');
};

const mostrarSigno = () => {
  let data = document.getElementById("nascimento").value;
  console.log(data);
};

const gerarInput = (tipo, id, onclick, idPai) => {
  let elemento = document.createElement("input");
  elemento.setAttribute("id", id);
  elemento.setAttribute("onclick", onclick);

  if (tipo) elemento.setAttribute("type", tipo);

  if (idPai) {
    let parent = document.getElementById(idPai);
    parent.append(elemento);
  } else {
    document.body.append(elemento);
  }
};

const adivinharNumero = (primeiro, ultimo) => {
  let palpite = prompt(`Digite um número entre ${primeiro} e ${ultimo}.`);
  let numeroComputador = sortearNumero(primeiro, ultimo);
  let operador;

  if (palpite > numeroComputador) operador = "maior que";
  else if (palpite < numeroComputador) operador = "menor que";
  else operador = "igual ao";

  alert(`Seu número ${palpite} é ${operador} meu número ${numeroComputador}`);
};

const sortearNumero = (primeiro, ultimo) =>
  Math.floor(Math.random() * (ultimo - primeiro + 1)) + primeiro;

/** Função que cria uma tag HTML e adiciona ao DOM */
const gerarElemento = ({ tag, id, idPai, classe, conteudo }) => {
  let elemento = document.createElement(tag);

  if (id) elemento.setAttribute("id", id);
  if (classe) elemento.setAttribute("class", classe);

  if (conteudo) elemento.innerHTML = conteudo;

  if (idPai) {
    let parent = document.getElementById(idPai);
    parent.append(elemento);
  } else {
    document.body.append(elemento);
  }
};
