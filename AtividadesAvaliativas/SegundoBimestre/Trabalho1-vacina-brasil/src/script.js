const inicio = () => {
  gerarElemento("div", "divPrincipal");
  gerarElemento("header", "cabecalho", "divPrincipal");
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
