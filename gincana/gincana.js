const fs = require('fs');

const INPUT = fs.readFileSync('./gincana/input','utf-8');

const LINHAS = INPUT.split('\n');

const PRIMEIRA_LINHA = LINHAS[0].split(' ');

const SEGUNDA_LINHA = LINHAS.slice(1).join('').split(' ');

let [x,y] = PRIMEIRA_LINHA;

let [a,p,v,l,r] = SEGUNDA_LINHA

console.log();

