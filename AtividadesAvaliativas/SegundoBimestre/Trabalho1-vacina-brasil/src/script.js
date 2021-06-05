const inicio = () => {
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

  gerarElemento({ tag: "div", idPai: 'rodape', conteudo: "Disque Coronavírus" });
};

const gerarElemento = ({ tag, id, idPai, classe, conteudo }) => {
  let elemento = document.createElement(tag);

  if (id) elemento.setAttribute("id", id);
  if (classe) elemento.setAttribute("class", classe);

  if (conteudo) elemento.innerText = conteudo;

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
