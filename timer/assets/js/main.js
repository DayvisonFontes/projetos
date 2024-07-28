const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let timerInterval;
let segundos = 0;

// Função para formatar o tempo em segundos para o formato 'hh:mm:ss'
const criaSegundos = (segundos) => {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { timeZone: 'GMT', hour12: false });
};

// Função para atualizar o cronômetro
function updateTimer() {
    timer.innerHTML = criaSegundos(segundos++);
}

// Evento de clique para iniciar o cronômetro
iniciar.addEventListener('click', function () {
    clearInterval(timerInterval); // Limpa qualquer intervalo existente
    timer.style.color = 'black'; // Define a cor do texto do cronômetro
    timer.innerHTML = criaSegundos(segundos); // Atualiza o display imediatamente

    updateTimer();

    timerInterval = setInterval(updateTimer, 1000); // Inicia o intervalo para atualizar o cronômetro a cada segundo
})

// Evento de clique para pausar o timer
pausar.addEventListener('click', function () {
    timer.style.color = 'red';
    clearInterval(timerInterval); // Para o cronometro
});

// Evento de clique para zerar o timer
zerar.addEventListener('click', function () {
    segundos = 0; // Reseta os segundos
    updateTimer(segundos); // Zera os segundos do timer
    clearInterval(timerInterval); // Zera qualquer intervalo que estiver no timer
    timer.style.color = 'black';
});