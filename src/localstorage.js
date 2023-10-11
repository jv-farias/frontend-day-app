// Função para lidar com o clique no ícone "salvar-agenda"
export function salvarCard(event) {
    // Verifique se o elemento clicado tem a classe "salvar-agenda"
    if (event.target.classList.contains("salvar-agenda")) {
        // Encontre o elemento pai do ícone que é o card
        const cardElement = event.target.closest(".cards-palestrante-content");

        const nomePalestranteElement = cardElement.querySelector(".nomePalestrante");
        const cargoPalestranteElement = cardElement.querySelector(".cargoPalestrante");
        const trilhaPalestranteElement = cardElement.querySelector(".trilhaPalestrante");
        const assuntoPalestranteElement = cardElement.querySelector(".assuntoLive");
        const nomeArquivoImagemElement = cardElement.querySelector(".imag-palestrante");
        const HorarioPalestranteElement = cardElement.querySelector(".horarioLive");

        const nomePalestrante = nomePalestranteElement.textContent;
        const cargoPalestrante = cargoPalestranteElement.textContent;
        const trilhaPalestrante = trilhaPalestranteElement.textContent;
        const assuntoPalestrante = assuntoPalestranteElement.textContent;
        const HorarioPalestrante = HorarioPalestranteElement.textContent;
        const srcDoArquivo = nomeArquivoImagemElement.src;

        // Obtenha outras informações relevantes do card
        const cardData = {
            dataStart: cardElement.getAttribute("data-start"),
            dataEnd: cardElement.getAttribute("data-end"),
            nomePalestrante: nomePalestrante,
            cargoPalestrante: cargoPalestrante,
            trilhaPalestrante: trilhaPalestrante,
            assuntoPalestrante: assuntoPalestrante,
            HorarioPalestrante: HorarioPalestrante,
            nomeArquivoImagem: srcDoArquivo
        };

        // Recupere ou crie o array de cards salvos no localStorage
        let savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];


        // Verifique se o card já foi salvo (pode ser identificado pelo data-id)

        if (savedCards) {
            // Se o card ainda não estiver na lista, adicione-o
            savedCards.push({ ...cardData });

            // Atualize o localStorage com os cards salvos
            localStorage.setItem("savedCards", JSON.stringify(savedCards));

            // Opcional: Exiba uma mensagem de confirmação ou atualize a interface do usuário
            alert("Card salvo com sucesso!");
        } else {
            // Opcional: Trate o caso em que o card já foi salvo anteriormente
            alert("Este card já foi salvo.");
        }
    }
}

// Adicione um ouvinte de eventos para delegar cliques nos ícones "salvar-agenda"
document.addEventListener("click", salvarCard);

// Função para criar elementos HTML com base nos dados salvos no localStorage
export function criarElementosComDadosSalvos() {
    // Recupere os dados do localStorage
    const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];

    // Seção onde você deseja exibir os cards
    const cardsCronogramaAgenda = document.getElementById("cards-cronograma-agenda");

    // Limpe o conteúdo existente na seção
    cardsCronogramaAgenda.innerHTML = "";

    let htmlString = "";

    // Itere sobre os dados salvos e crie elementos HTML para cada um
    savedCards.forEach((cardData) => {
        htmlString += `
      <li data-start="${cardData.dataStart}" data-end="${cardData.dataEnd}" class="cards-palestrante-content">
      <div class="info-post">
          <div class="user">
              <div class="user-img">
                  <img src="./assets/logos/frontenday2023.svg" alt="Logo Front-End Day 2023">
              </div>
              <div class="user-nome">
                  <p class="usuario">@frontendday2023</p>
                  <p class="horarioLive">${cardData.HorarioPalestrante}</p>
              </div>
          </div>
          <button class="remove-agenda">
          <i class="fa-regular fa-bookmark"class="remove-agenda"></i>
          </button>
      </div>
      <div class="palestrante">
          <div class="img-palestrante">
              <img src="${cardData.nomeArquivoImagem}" alt="${cardData.nomePalestrante}">
          </div>
          <div class="info-palestrante">
              <div class="nome-cargo">
                  <p class="nomePalestrante">${cardData.nomePalestrante}</p>
                  <p class="cargoPalestrante">${cardData.cargoPalestrante}</p>
              </div>
              <div class="trilha">
                  <p class="trilhaPalestrante">${cardData.trilhaPalestrante}</p>
              </div>
          </div>
      </div>
      <div class="assunto-palestra">
          <p class="assuntoLive">${cardData.assuntoPalestrante}</p>
      </div>
  </li>
      `;

        // Adicione o card à seção "cards-cronograma-agenda"
        cardsCronogramaAgenda.innerHTML = htmlString;
    });
}

// Chame a função para criar elementos com os dados salvos quando a página carregar
window.addEventListener("click", criarElementosComDadosSalvos);