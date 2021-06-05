const inicio = () => {
  gerarEstruturaBasica();
  gerarPagina1();
};

const gerarPagina2 = async () => {
  document.getElementById("principal").remove();

  gerarElemento({
    tag: "main",
    id: "principal",
    idPai: "divPrincipal",
    classe: "segundaPagina",
  });

  gerarElemento({
    tag: "div",
    id: "divSegunda",
    idPai: "principal",
  });

  document
    .getElementById("rodape")
    .before(document.getElementById("principal"));

  gerarElemento({
    tag: "h1",
    conteudo: "Identificação",
    idPai: "divSegunda",
  });

  gerarElemento({
    tag: "div",
    id: "divAlerta",
    idPai: "divSegunda",
    conteudo: await obterTxt("../alerta.txt"),
  });

  // TODO: Consertar a formatação e agrupar por names
  criarLabelsEInputs(await obterLinhas("../texto.txt"));
};

const gerarPagina1 = () => {
  gerarElemento({ tag: "div", id: "divPrimeira", idPai: "principal" });

  // main possui id 'principal'
  document.getElementById("principal").setAttribute("class", "primeiraPagina");

  adicionarImagem("cabecalho.png", "divPrimeira");

  gerarElemento({
    tag: "button",
    id: "acesso",
    conteudo: "Primeiro Acesso",
    idPai: "divPrimeira",
  });

  document.getElementById("acesso").setAttribute("onClick", "gerarPagina2()");
};

const gerarEstruturaBasica = () => {
  gerarElemento({ tag: "div", id: "divPrincipal" });
  gerarElemento({ tag: "header", id: "cabecalho", idPai: "divPrincipal" });
  adicionarImagem("logo.png", "cabecalho");

  gerarElemento({ tag: "main", id: "principal", idPai: "divPrincipal" });
  gerarElemento({
    tag: "footer",
    id: "rodape",
    idPai: "divPrincipal",
    classe: "marquee",
  });

  gerarElemento({
    tag: "div",
    idPai: "rodape",
    conteudo: "Disque Coronavírus",
  });

  adicionarImagem("telefone.png", "rodape");
  gerarElemento({ tag: "span", conteudo: "0800 400-1234", idPai: "rodape" });
};

const gerarElemento = ({ tag, id, idPai, classe, conteudo }) => {
  let elemento = document.createElement(tag);

  if (id) elemento.setAttribute("id", id);
  if (classe) elemento.setAttribute("class", classe);

  if (conteudo) elemento.innerText = conteudo;

  if (idPai) {
    let parent = document.getElementById(idPai);
    parent.append(elemento);
  } else {
    document.body.append(elemento);
  }
};

const adicionarImagem = (nome, idPai) => {
  let imagem = document.createElement("img");
  imagem.setAttribute("src", `${caminho + nome}`);

  let parent = document.getElementById(idPai);
  parent.append(imagem);
};

const obterTxt = async (arquivo) => {
  const response = await fetch(arquivo);
  const texto = await response.text();
  console.log(texto);
  return texto;
};

const obterLinhas = async (arquivo) => {
  const texto = await obterTxt(arquivo);
  return texto.split("\n");
};

const criarLabelsEInputs = (linhas) => {
  linhas.forEach((linha) => {
    criarInput({
      tipo: "radio",
      // Está errado pois os names precisam ser diferentes
      nome: "categoria",
      valor: linha,
      idPai: "divSegunda",
    });

    gerarElemento({
      tag: "label",
      classe: "titulos",
      conteudo: linha,
      idPai: "divSegunda",
    });
  });
};

const criarInput = ({ tipo, nome, valor, idPai }) => {
  let elemento = document.createElement("input");
  elemento.setAttribute("type", tipo);
  elemento.setAttribute("name", nome);
  elemento.setAttribute("value", valor);

  document.getElementById(idPai).append(elemento);
};

var caminho = "img/";
