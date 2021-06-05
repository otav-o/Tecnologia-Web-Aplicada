const inicio = () => {
  gerarElemento("div", "divPrincipal");
  gerarElemento("header", "cabecalho", "divPrincipal");
  adicionarImagem("logo.png", "cabecalho");
};

const gerarElemento = (tag, id, idPai) => {
  let elemento = document.createElement(tag);
  elemento.setAttribute("id", id);

  if (idPai) {
    let parent = document.getElementById(idPai);
    parent.appendChild(elemento);
  } else {
    document.body.appendChild(elemento);
  }
};

const adicionarImagem = (nome, idPai) => {
  let imagem = document.createElement("img");
  imagem.setAttribute("src", `${caminho + nome}`);

  let parent = document.getElementById(idPai);
  parent.appendChild(imagem);
};

var caminho = "img/";
