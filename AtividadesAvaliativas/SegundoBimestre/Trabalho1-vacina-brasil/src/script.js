const inicio = () => {
  try {
    document.getElementById("divPrincipal").remove();
  } catch (e) {
    console.log("Primeira versão!");
  }
  gerarEstruturaBasica();
  gerarPagina1();
};

const gerarPagina3 = async () => {
  // TODO: Recuperar o conteúdo selecionado na página 2
  // TODO: Exibir alerta se nada estiver selecionado ("Antes de prosseguir, você precisará selecionar uma opção! ")

  document.getElementById("principal").remove();

  gerarElemento({
    tag: "main",
    id: "principal",
    idPai: "divPrincipal",
    classe: "terceiraPagina",
  });

  gerarElemento({
    tag: "div",
    id: "divTerceira",
    idPai: "principal",
  });

  document
    .getElementById("rodape")
    .before(document.getElementById("principal")); // seria legal isso virar um método

  gerarElemento({
    tag: "h1",
    // TODO: Identificação + valor selecionado na tela anterior
    conteudo: "Identificação",
    idPai: "divTerceira",
  });

  gerarElemento({
    tag: "label",
    conteudo: "*Campos Obrigatórios",
    idPai: "divTerceira",
  });

  gerarElemento({
    tag: "form",
    id: "formulario",
    idPai: "divTerceira",
  });

  document
    .getElementById("formulario")
    .setAttribute("onsubmit", "alert('Formulário enviado com sucesso!')");

  gerarElemento({
    tag: "label",
    conteudo: "CPF<span class='asterisco'>*</span>",
    idPai: "formulario",
  });

  criarInput({
    tipo: "text",
    idPai: "formulario",
    required: true,
    placeholder: "___.___.___-__",
  });

  gerarElemento({
    tag: "label",
    conteudo: "Data de nascimento<span class='asterisco'>*</span>",
    idPai: "formulario",
  });

  criarInput({
    tipo: "date",
    idPai: "formulario",
    required: true,
  });

  gerarElemento({
    tag: "label",
    conteudo: "Nome completo<span class='asterisco'>*</span>",
    idPai: "formulario",
  });

  criarInput({
    tipo: "text",
    idPai: "formulario",
    required: true,
    classe: "maior",
  });

  gerarElemento({
    tag: "label",
    conteudo: "Endereço completo<span class='asterisco'>*</span>",
    idPai: "formulario",
  });

  criarInput({
    tipo: "text",
    idPai: "formulario",
    required: true,
    classe: "maior",
  });

  gerarElemento({
    tag: "div",
    id: "divAlerta",
    idPai: "formulario",
    conteudo: await obterTxt("../termo_de_aceite.txt"),
  });

  criarInput({
    tipo: "checkbox",
    nome: "aceite",
    required: true,
    idPai: "formulario",
  });

  gerarElemento({
    tag: "label",
    classe: "inline",
    conteudo: "Li e concordo",
    idPai: "formulario",
  });

  gerarElemento({
    tag: "button",
    classe: "verde",
    conteudo: "Salvar",
    idPai: "formulario",
    id: "botaoSalvar",
  });

  document.getElementById("botaoSalvar").setAttribute("type", "submit");

  gerarElemento({
    tag: "button",
    conteudo: "Voltar",
    idPai: "formulario",
    id: "voltar",
  });

  document.getElementById("voltar").setAttribute("onclick", "gerarPagina2()");
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

  gerarElemento({
    tag: "button",
    classe: "verde",
    conteudo: "Continuar",
    idPai: "divSegunda",
    id: "botaoTerceiraPagina",
  });

  gerarElemento({
    tag: "button",
    conteudo: "Voltar",
    idPai: "divSegunda",
    id: "voltar",
  });

  document
    .getElementById("botaoTerceiraPagina")
    .setAttribute("onclick", "gerarPagina3()");

  document.getElementById("voltar").setAttribute("onclick", "inicio()");
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

  if (conteudo) elemento.innerHTML = conteudo;

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

const criarInput = ({
  tipo,
  nome,
  valor,
  idPai,
  required = false,
  placeholder,
  classe,
}) => {
  let elemento = document.createElement("input");
  elemento.setAttribute("type", tipo);
  if (nome) elemento.setAttribute("name", nome);
  if (valor) elemento.setAttribute("value", valor);
  if (placeholder) elemento.setAttribute("placeholder", placeholder);
  if (classe) elemento.setAttribute("class", classe);

  elemento.setAttribute("required", required);

  document.getElementById(idPai).append(elemento);
};

var caminho = "img/";
