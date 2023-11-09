function escrevaMeuNome(nome) {
    //console.log("Meu nome é : " + nome); para imprimir os nomes abaixos.
    return "Meu nome é : " + nome; // Para retorna dentro da função maiorDeIdade.
}

escrevaMeuNome('Markim');
escrevaMeuNome('Freitas');


function maiorDeIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Markim ') + 'Maior de Idade'); //Adcionando a função escreverMeuNome dentro da função maiorDeIdade.
} else {
    console.log(escrevaMeuNome('Freitas ') + 'Menor de Idade'); //Adcionando a função escreverMeuNome dentro da função maiorDeIdade.
}
}

maiorDeIdade(18);
