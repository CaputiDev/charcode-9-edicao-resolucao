// https://autojudge.io/problems/a6562e
const fs = require('fs');

const INPUT = fs.readFileSync('./campo-minado/input', 'utf8');

const LINHAS = INPUT.split('\n');
const PRIMEIRA_LINHA = LINHAS[0].split(' ');
const MAPA = LINHAS.slice(1);

const [ALTURA, LARGURA] = PRIMEIRA_LINHA;

let tabuleiro = [];

//preenche o tabuleiro
for(let i = 0; i < ALTURA; i++){
    tabuleiro[i] = [];
    for(let j =0;j<LARGURA;j++){
        tabuleiro[i][j] = MAPA[i][j];
    }
}

//verifica as 8 posicoes adjacentes
for(let i = 0; i < ALTURA; i++){
    for(let j = 0; j < LARGURA; j++){
        if(tabuleiro[i][j] == '.'){
            let count = 0;
            
            //verifica linha acima
            if(tabuleiro[i+1] && tabuleiro[i+1][j] == '*') count++;
            if(tabuleiro[i+1] && tabuleiro[i+1][j+1] == '*') count++;
            if(tabuleiro[i+1] && tabuleiro[i+1][j-1] == '*') count++;

            //verifica linha abaixo
            if(tabuleiro[i-1] && tabuleiro[i-1][j] == '*') count++;
            if(tabuleiro[i-1] && tabuleiro[i-1][j-1] == '*') count++;
            if(tabuleiro[i-1] && tabuleiro[i-1][j+1] == '*') count++;

            //verifica linha atual
            if(tabuleiro[i][j+1] == '*') count++;
            if(tabuleiro[i][j-1] == '*') count++;

            //preenche posicao com o numero de bombas adjacentes
            tabuleiro[i][j] = count;
        }
    }
}

//Imprime o tabuleiro
for(let i = 0; i < ALTURA; i++){
    console.log(`${tabuleiro[i].join('')}`);
}


