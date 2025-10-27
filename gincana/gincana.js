const fs = require('fs');

const INPUT = fs.readFileSync('./gincana/input','utf-8');

const LINHAS = INPUT.split('\n');

const PRIMEIRA_LINHA = LINHAS[0].split(' ');

const SEGUNDA_LINHA = LINHAS.slice(1).join('').split(' ');

let [pontosTampinhas,pontosKits] = PRIMEIRA_LINHA;

let tampinhas = SEGUNDA_LINHA;

//soma todas tampinhas
let totalTampinhas = tampinhas.reduce((a,b)=>{
    return +a + +b;
});

//verifica qual cor de tampinha é a menor, essa sendo a quantidade de kits completados  
let totalKits = tampinhas.reduce((a,b)=>{
    if(a < b){
        return a;
    }else if(b < a){
        return b;
    }
});

//calcula os pontos
let resultado = (+totalTampinhas * +pontosTampinhas) + (+pontosKits * +totalKits);

//imprime o total de pontos
console.log(resultado);
