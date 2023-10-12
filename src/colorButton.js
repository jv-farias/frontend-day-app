const radios = document.querySelectorAll('input[type="radio"]');
const titulo = document.getElementById('titulo');
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      titulo.textContent = radio.nextElementSibling.textContent; // Define o título com o texto do rótulo próximo ao rádio selecionado


      // Remove a classe "active" de todas as tags <i> dentro das labels
      document.querySelectorAll('div i').forEach(icon => {
        icon.classList.remove('icone-color');
      });

      // Adiciona a classe "active" à tag <i> dentro da label do rádio selecionado
      radio.parentElement.querySelector('i').classList.add('icone-color');
    } else {
      // Remove a classe "active" da tag <i> dentro da label quando o rádio não está marcado
      radio.parentElement.querySelector('i').classList.remove('icone-color');
    }
  });
});
