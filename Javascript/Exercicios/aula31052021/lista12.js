function inicio() {
  let caixa = criarDiv("operacoes");
  criarTitulo(caixa, "Operações Matemáticas");
  criarFormulario(caixa, "formulario");
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

const criarFormulario = (elementoPai, id) => {
  elementoPai.appendChild(
    document.createElement("form").setAttribute("id", id)
  );
};

const criarLabel = () => {
  let tag = document.createElement("label");
  tag.setAttribute("for", "inputNumero");
  tag.innerHTML = "Digite um número";
  document.querySelector("#formulario").appendChild(tag);
};

tag = document.createElement("input");
tag.setAttribute("class", "azul");
tag.setAttribute("type", "number");
tag.setAttribute("id", "inputNumero");
tag.setAttribute("required", "true");
