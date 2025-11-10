// https://autojudge.io/problems/aa7fde
const fs = require('fs');

const INPUT = fs.readFileSync('./ceramica/input','utf-8');

const LINHAS = INPUT.split('\n');

const PI = 3.1415;

const [DIAMETRO , ALTURA] = LINHAS[0].split(' ');

const RAIO = DIAMETRO/2;

let VOLUME = ((PI * (RAIO ** 2) * ALTURA) * 2) * 1.10;

VOLUME = Math.ceil(VOLUME /5) *5;

console.log(VOLUME);


