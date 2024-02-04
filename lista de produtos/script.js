const produtos = [
  { nome: "Curso Outsystems", categoria: "Programação", preco: "4000€" },
  { nome: "Telemóvel", categoria: "Tecnologia", preco: "40000€" },
  { nome: "TV", categoria: "Tecnologia", preco: "8000,1€" },
  { nome: "Cadeira", categoria: "Mobiliário", preco: "7001€" },
  { nome: "Teclado", categoria: "Tecnologia", preco: "1000001€" },
];

let produtosTabela = document.getElementById("produtoLista");

for (i = 0; i < produtos.length; i++) {
  let linha = produtosTabela.insertRow();
  let nome = linha.insertCell();
  let categoria = linha.insertCell();
  let preco = linha.insertCell();
  nome.innerHTML = produtos[i].nome;
  categoria.innerHTML = produtos[i].categoria;
  preco.innerHTML = produtos[i].preco;
}
