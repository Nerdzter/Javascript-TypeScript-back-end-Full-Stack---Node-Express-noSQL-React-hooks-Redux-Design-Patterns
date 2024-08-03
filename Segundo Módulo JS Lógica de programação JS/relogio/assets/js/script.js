// Puxando as partes que vou manipular do HTML

const relogio = document.querySelector(".relogio");    // RELOGIO
const comecar = document.querySelector(".comecar");    // BTN COMECAR
const parar = document.querySelector(".parar");        // BTN PARAR
const reiniciar = document.querySelector(".reiniciar"); // BTN REINICIAR

// Variável inicializada

let segundos = 0;
let timer; // Variável para armazenar o intervalo do relógio

// RECEBENDO OS EVENTOS

// COMEÇAR
comecar.addEventListener('click', function(event) {
    iniciaRelogio();
});

// PARAR
parar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.style.color = 'red';
});

// REINICIAR
reiniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});

// Função para pegar o tempo pelos segundos
function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

// Função que inicia o relógio
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}
