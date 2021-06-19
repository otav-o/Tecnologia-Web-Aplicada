const inicio = () => {
  gerarElemento({
    tag: "button",
    id: "botao-adivinhar",
    conteudo: "Tente adivinhar",
  });
  document
    .getElementById("botao-adivinhar")
    .setAttribute("onclick", "adivinharNumero(0, 100)");

  gerarInput("date", "nascimento", "mostrarSigno()");
};

const mostrarSigno = () => {
  let data = new Date(document.getElementById("nascimento").value);
  console.log(data);
  mostrarImagem(data);

  data = new Date(data.getMilliseconds);
};

const mostrarImagem = (data) => {
  console.log(data);
  if (data > new Date("2021/1/20") && data < new Date("19/2"))
    Exibir(signos[0]);
  else if (data < new Date("2021/3/21")) Exibir(signos[1]);
  else if (data < new Date("2021/4/20")) Exibir(signos[2]);
  else if (data < new Date("2021/5/22")) Exibir(signos[3]);
  else if (data < new Date("2021/6/22")) Exibir(signos[4]);
  else if (data < new Date("2021/7/24")) Exibir(signos[5]);
  else if (data < new Date("2021/8/24")) Exibir(signos[6]);
  else if (data < new Date("2021/9/24")) Exibir(signos[7]);
  else if (data < new Date("2021/10/24")) Exibir(signos[8]);
  else if (data < new Date("2021/11/23")) Exibir(signos[9]);
  else if (data < new Date("2021/12/22")) Exibir(signos[10]);
  else if (data < new Date("2021/1/20")) Exibir(signos[11]);

  // Não funcionou!
};

const Exibir = (signo) => {
  gerarElemento({ tag: "img", id: `imagem-signo-${signo.nome}` });
  console.log(signo);
  document
    .getElementById(`imagem-signo-${signo.nome}`)
    .setAttribute("src", `img/${signo.url}.jpg`);
  gerarElemento({ tag: "p", conteudo: signo.nome + "\n" + signo.descricao });
};

const signos = [
  {
    nome: "Aquário",
    url: "aquario",
    descricao: "20 de Janeiro - 18 de Fevereiro",
  },
  {
    nome: "Peixes",
    url: "peixes",
    descricao: "19 de Fevereiro - 20 de Março",
  },
  {
    nome: "Áries",
    url: "aries",
    descricao: "21 de Março - 19 de Abril",
  },
  {
    nome: "Touro",
    url: "touro",
    descricao: "20 de Abril - 20 de Maio",
  },
  {
    nome: "Gêmeos",
    url: "gemeos",
    descricao: "21 de Maio - 20 de Junho",
  },
  {
    nome: "Câncer",
    url: "cancer",
    descricao: "21 de Junho - 22 de Julho",
  },
  {
    nome: "Leão",
    url: "leao",
    descricao: "23 de Julho - 22 de Agosto",
  },
  {
    nome: "Virgem",
    url: "virgem",
    descricao: "23 de Agosto - 22 de Setembro",
  },
  {
    nome: "Libra",
    url: "libra",
    descricao: "23 de Setembro - 22 de Outubro",
  },
  {
    nome: "Escorpião",
    url: "escorpiao",
    descricao: "23 de Outubro - 21 de Novembro",
  },
  {
    nome: "Sagitário",
    url: "sagitario",
    descricao: "22 de Novembro - 21 de Dezembro",
  },
  {
    nome: "Capricórnio",
    url: "capricornio",
    descricao: "22 de Dezembro - 19 de Janeiro",
  },
];

const gerarInput = (tipo, id, onchange, idPai) => {
  let elemento = document.createElement("input");
  elemento.setAttribute("id", id);
  elemento.setAttribute("onchange", onchange);

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
