const inicio = () => {
  let elemento = criarElemento("div");
  document.body.appendChild(elemento);

  criarElemento2("div", "", "body");
  criarElemento2("h2", "Calculadora Aritmética", "div");
  criarElemento2("form", "", "div");
  // criarElemento2("form", "", "div", ['method', 'post', 'action', '#']);
  // ou usar objeto
  document.querySelector("form").setAttribute("method", "post");
  document.querySelector("form").setAttribute("action", "#");
};

const criarElemento = (tag) => document.createElement(tag);

const criarElemento2 = (tag, texto, elementoPai) => {
  let elemento = document.createElement(tag);
  elemento.innerHTML = texto;

  if (elementoPai == "body") {
    document.body.appendChild(elemento);
  } else {
    document.querySelector(elementoPai).appendChild(elemento);
  }
};
