const inicio = () => {
  gerarElemento({
    tag: "button",
    id: "botao-adivinhar",
    conteudo: "Tente adivinhar",
  });
  document
    .getElementById("botao-adivinhar")
    .setAttribute("onclick", "adivinharNumero()");
};

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
