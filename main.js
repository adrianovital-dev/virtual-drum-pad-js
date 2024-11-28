// Função para tocar o som de acordo com o seletor de áudio
function tocaSom (seletorAudio) {
    const elemento = document.querySelector (seletorAudio);

    // Verifica se o elemento existe e se é uma tag de áudio
    if (elemento && elemento.localName === 'audio') {
        elemento.play(); // Reproduz o som
    }
    else {
        console.log('Elemento não encontrado')
    }
}


// Seleciona todos os botões com a classe 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla')

// Adiciona eventos para cada tecla
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador]; // Seleciona a tecla atual
    const instrumento = tecla.classList[1]; // Obtém o tipo de instrumento (classe secundária)
    const idAudio = `#som_${instrumento}`; // Monta o seletor do áudio correspondente
    
    // Evento de clique para tocar o som
    tecla.onclick = function () {
        tocaSom(idAudio);
    } 

    // Evento para adicionar classe 'ativa' ao pressionar Enter ou Espaço
    tecla.onkeydown = function (evento) {
        if (evento.code ==='Space' || evento.code === 'Enter')
            tecla.classList.add('ativa');
    }
    
    // Remove a classe 'ativa' ao soltar a tecla
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}
