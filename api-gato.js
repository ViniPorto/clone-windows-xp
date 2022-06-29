const gatos = async () => {
  const url = "https://cataas.com/cat?json=true";
  const dados = await fetch(url);
  const dadosJson = await dados.json();
  document.getElementById(
    "imagens-api-gato"
  ).src = `https://cataas.com${dadosJson.url}`;
};

const limpar_dados_api_gato = () => {
  document.getElementById("imagens-api-gato").src = "";
};

document.getElementById("link-api-gatos").addEventListener("click", gatos);
document
  .getElementById("botao-fechar-imagem-gato")
  .addEventListener("click", limpar_dados_api_gato);
