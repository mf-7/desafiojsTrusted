function mostrarDataHora() {
  const elemento = document.getElementById("dataHora");
  const dataHoraAtual = new Date();
  //Formatar o output da data e hora
  const dataHoraFormatada = dataHoraAtual.toLocaleString("pt-PT");

  elemento.innerHTML = `Data e Hora de hoje: ${dataHoraFormatada}`;
}
// Chama a função ao carregar a página
mostrarDataHora();
