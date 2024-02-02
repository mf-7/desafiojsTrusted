const produtos = [
  { nome: "Computador", categoria: "Tecnologia", preco: "800" },
  { nome: "Telemóvel", categoria: "Tecnologia", preco: "8" },
  { nome: "TV", categoria: "Tecnologia", preco: "8000,1" },
];

let produtoTabela = document.getElementById("produtoLista");

for (i = 0; i < produtos.length; i++) {
  let produtoTableLinha = document.createElement("tr");
  let produtoTabelaDadosNome = document.createElement("td");
  produtoTabelaDadosNome.innerHTML = produtos[i].nome;
  produtoTableLinha.appendChild(produtoTabelaDadosNome);

  produtoTabela.appendChild(produtoTableLinha);

  let produtoTabelaDadosCategoria = document.createElement("td");
  produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
  produtoTableLinha.appendChild(produtoTabelaDadosCategoria);

  produtoTabela.appendChild(produtoTableLinha);

  let produtoTabelaDadosPreco = document.createElement("td");
  produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
  produtoTableLinha.appendChild(produtoTabelaDadosPreco);

  produtoTabela.appendChild(produtoTableLinha);
}
