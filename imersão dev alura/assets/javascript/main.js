function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    // Seleciona o campo de pesquisa do input
    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    // Verifica se o campoPesquisa tem algum conteúdo
    if(campoPesquisa === "") {
      section.innerHTML = "Nenhum filme foi encontrado";
      return;
    }
    
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada item do array de dados
    for (let dado of dados) {
      const termoPesquisa = campoPesquisa.toLowerCase().trim(); 
      const titulo = dado.titulo.toLowerCase().trim(); 
      const descricao = dado.descricao.toLowerCase().trim();

      if(titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa)) {
          // Cria uma nova div para cada resultado
          resultados += `
          <div class="item-resultado">
          <h2><a href="${dado.link}" target="_blank" rel="external">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          </div>`;
      }
    }

    if(!resultados) {
      resultados += "<p>Nenhum filme foi encontrado para o termo '" + campoPesquisa + "'</p>";
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}
