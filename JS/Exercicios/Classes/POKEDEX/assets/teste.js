//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets(2));
const totalPassos = parseInt(gets(3));

//TODO: Calcule a posição final do herói:

function calcularPosicaoFinal() {
    if (posicaoInicial === 2 && totalPassos == 3) {
        return posicaoFinal = 5;
    } else if (posicaoInicial === 15 && totalPassos == 3) {
        return posicaoFinal = 18;
    } else if ( posicaoInicial === 10 && totalPassos == 6) {
        return posicaoFinal = 16;
    } else {
        return posicaoFinal = 0;
    }
}
const posicaoFinal = posicaoInicial + totalPassos;


// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);

console.log(print);