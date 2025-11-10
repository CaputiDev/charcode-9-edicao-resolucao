const fs = require('fs');

const linhas = fs.readFileSync('./feira/input', 'utf8').split('\n');

const primeiraLinha = linhas.shift(); 
const [N_str, ANO] = primeiraLinha.split(' ');
const N = parseInt(N_str); 

const titulos = linhas.slice(0, N);

const idsVistos = [];

let contadorDuplicatas = 0;

for (const titulo of titulos) {
    if (titulo.length === 0) continue; 

    const palavras = titulo.split(' ');
    let sigla = '';

    for (const palavra of palavras) {
        if (palavra.length > 0) {
            sigla += palavra[0];
        }
    }

    const idFinal = sigla + ANO;

    if (idsVistos.includes(idFinal)) {
        contadorDuplicatas++;
    } else {
        idsVistos.push(idFinal);
    }
}

console.log(contadorDuplicatas);

