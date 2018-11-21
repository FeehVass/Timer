let paragrafo = document.querySelector('#timer');

let tempoTotal = 30;

paragrafo.innerHTML = `${tempoTotal}`;

const atualizarParagrafo = (valor) => {
    paragrafo.innerHTML.innerHTML= `${tempoTotal}`;
}

const diminuirTempo =() => {
    tempoTotal --;
    atualizarParagrafo (tempoTotal);
}

setInterval ((diminuirTempo) => {
    tempoTotal --;
    paragrafo.innerHTML = `${tempoTotal}`;
}, 1000)

atualizarParagrafo(tempoTotal);


// setInterval (() => {
//     tempoTotal --;
//     paragrafo.innerHTML = `${tempoTotal}`;
// }, 1000)
// em segundos o 1000= 1 seg