const data = new Date();
// recebendo a data

// Recebendo dia, mes e ano separadamente
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
// separando
const diaDaSemana = data.getDay();
const diaSemana = escreveDia(diaDaSemana);
// escrevando dia
function escreveDia(dia) {
    let diaSemana;

    switch (dia) {
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Segunda-feira';
            break;
        case 2:
            diaSemana = 'Terça-feira';
            break;
        case 3:
            diaSemana = 'Quarta-feira';
            break;
        case 4:
            diaSemana = 'Quinta-feira';
            break;
        case 5:
            diaSemana = 'Sexta-feira';
            break;
        case 6:
            diaSemana = 'Sábado';
            break;
    }

    return diaSemana; // retorna o referente
}

// recebe a hora

function obterHoraExata() {
    const data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    // Adiciona zero à esquerda se o número for menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    return `${horas}:${minutos}:${segundos}`;
}

//console.log(obterHoraExata());


//console.log(`${diaSemana}, ${dia} de ${mes} de ${ano}. E agora são exatamente ${obterHoraExata()}`);

const container = document.getElementById('container');
container.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano}. E agora são exatamente ${obterHoraExata()}`;