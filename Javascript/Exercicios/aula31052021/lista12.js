function inicio() {
  let caixa = criarDiv("operacoes");
  criarTitulo(caixa, "Operações Matemáticas");
}

const criarDiv = (id) => {
  // 1° passo: criação da tag ou elemento

  let caixa = document.createElement("div");

  // 2° passo: definir os atributos

  caixa.setAttribute("id", id);

  // 3° passo: adicionar ao HTML como filho de algum elemento

  document.body.appendChild(caixa);
  return caixa;
};

const criarTitulo = (elementoPai, conteudo) => {
  let tag = document.createElement("h1");
  tag.innerHTML = conteudo;
  elementoPai.appendChild(tag);
};
