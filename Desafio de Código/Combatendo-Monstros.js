/*
*******Descrição******

Seu jogo de RPG está ganhando forma! Agora, é hora de implementar a mecânica de combate.
Para isso, você precisa criar um programa que simule um combate entre um personagem e um monstro.

O programa deve pedir que o usuário insira um número entre 1 e 6, que representará o valor da jogada de dados
do personagem. Em seguida, o programa deve pedir outro número entre 1 e 6, que representará o valor da jogada de dados do
monstro. O programa deve comparar as jogadas e exibir na tela o resultado do combate, informando se o personagem
venceu, empatou ou perdeu.

Entrada
O programa deve pedir que o usuário insira dois valores: um número entre 1 e 6 para representar a jogada de dados
do personagem, e um número entre 1 e 6 para representar a jogada de dados do monstro.

Saída
Após receber o valor da jogada de dados do personagem e gerar o valor da jogada de dados do monstro, o programa deve 
compará-los e exibir na tela uma das seguintes frases:

"Você venceu a batalha!" (caso a jogada do personagem seja maior do que a jogada do monstro)
"Você perdeu a batalha!" (caso a jogada do personagem seja menor do que a jogada do monstro)
"Foi um empate!" (caso a jogada do personagem seja igual à jogada do monstro)

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de
testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída

6  |  Foi um empate!
6  |
---|-------------------------
4  |  Você venceu a batalha!
3  |
---|-------------------------
1  |  Você perdeu a batalha!
5  |
-----------------------------
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a jogada do personagem:
var jogadaPersonagem = parseInt(gets());

// Lê a jogada do monstro:
var jogadaMonstro = parseInt(gets());

// TODO: Crie uma função ou outro conceito de lógica de programação para realizar o combate e retornar o resultado:
function  {
//TODO: Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro, prossiga: 
  if (jogadaPersonagem > jogadaMonstro) {
    return "Você venceu a batalha!";
  } 

}

// TODO: Agora chame a função para realizar o combate para exibir o resultado:
var resultado =  ;
print(resultado);



//********************************RESOLUÇÃO****************************

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a jogada do personagem:
var jogadaPersonagem = parseInt(gets());

// Lê a jogada do monstro:
var jogadaMonstro = parseInt(gets());

// TODO: Crie uma função ou outro conceito de lógica de programação para realizar o combate e retornar o resultado:
function combate (jogadaPersonagem, jogadaMonstro) {  // Criamos a função "combate" com os parametros "jogadaPersonagem, jogadaMostro"
//TODO: Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro, prossiga: 
  if (jogadaPersonagem > jogadaMonstro) {
    return "Você venceu a batalha!";
  } else if (jogadaPersonagem < jogadaMonstro) { // Adicionamos a condição else if caso o paramentro "jogadaPersonagem for menor que jogadaMostro" com o return Você perdeu a batalha!
    return "Você perdeu a batalha!";
  } else { //Adicionamos a condição else para que se nenhuma das alternativas anteriores forem verdadeiras retornar Foi um empate!
    return "Foi um empate!"
  }

}

// TODO: Agora chame a função para realizar o combate para exibir o resultado:
var resultado = combate (jogadaPersonagem, jogadaMonstro) ; // Chamamos a função "combate" com seus parametros "jogadaPersonagem, jogadaMostro" para impressão no console.
print(resultado);