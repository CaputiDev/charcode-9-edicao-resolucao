// https://autojudge.io/problems/dbec62
const fs = require('fs');

const INPUT = fs.readFileSync('./gincana/input','utf-8');

const LINHAS = INPUT.split('\n');

const PRIMEIRA_LINHA = LINHAS[0].split(' ');

const SEGUNDA_LINHA = LINHAS[1].split(' ');

const [PONTOS_TAMPINHAS,PONTOS_KITS] = PRIMEIRA_LINHA;

const TAMPINHAS = SEGUNDA_LINHA;

//soma todas tampinhas
const SOMA_TAMPINHAS = TAMPINHAS.reduce((a,b)=>{
    return +a + +b;
});

//verifica qual cor de tampinha é a menor, essa sendo a quantidade de kits completados  
const TOTAL_KITS = TAMPINHAS.reduce((a,b)=>{
    if(a < b){
        return a;
    }else if(b < a){
        return b;
    }
});

//calcula os pontos
const RESULTADO = (+SOMA_TAMPINHAS * +PONTOS_TAMPINHAS) + (+PONTOS_KITS * +TOTAL_KITS);

//imprime o total de pontos
console.log(RESULTADO);
