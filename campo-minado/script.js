const { log } = require('console');

var input = require('fs').readFileSync('input', 'utf8');

var linhas = input.split('\n');

var primeiraLinha = input.split('\n')[0].split(' ');
var altura = primeiraLinha[0];
var largura = primeiraLinha[1];

var mapa = linhas.slice(1);

var tabuleiro = [];

for(let i =0 ;i<altura;i++){
    tabuleiro[i] = [];
    for(let j =0;j<largura;j++){
        tabuleiro[i][j] = mapa[i][j];
    }
}

for(let i =0 ;i<altura;i++){
    for(let j =0;j<largura;j++){
        if(tabuleiro[i][j] == '.'){
            let count =0;
            
            if(tabuleiro[i+1] && tabuleiro[i+1][j] == '*') count++;
            if(tabuleiro[i+1] && tabuleiro[i+1][j+1] == '*') count++;
            if(tabuleiro[i+1] && tabuleiro[i+1][j-1] == '*') count++;

                    
            if(tabuleiro[i-1] && tabuleiro[i-1][j] == '*') count++;
            if(tabuleiro[i-1] && tabuleiro[i-1][j-1] == '*') count++;
            if(tabuleiro[i-1] && tabuleiro[i-1][j+1] == '*') count++;

                    
            if(tabuleiro[i][j+1] == '*') count++;
            if(tabuleiro[i][j-1] == '*') count++;
            tabuleiro[i][j] = count;
        }
    }
}

for(let i =0 ;i<altura;i++){
    console.log(`${tabuleiro[i].join('')}`);
    for(let j =0;j<largura;j++){
        
    }
    
}


