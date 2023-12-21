/*
*******Descrição******

Você deve desenvolver um programa que simule um RPG com um loop de repetição e concatenação.
O programa deve solicitar o nome do personagem e, em seguida, pedir que o usuário escolha entre "Atacar" ou "Fugir".
Caso o usuário escolha uma ação inválida, o programa deve exibir uma mensagem de erro e permitir que o usuário tente
novamente.

Entrada:
O programa deve solicitar ao usuário que insira o nome do personagem e a ação que ele deve realizar (Atacar ou Fugir).
O nome e a ação deve ser inserido como uma String.

Saída:
Após receber o nome do personagem e a ação escolhida, o programa deve exibir uma mensagem informando qual ação foi
escolhida pelo personagem, concatenando o nome do personagem com a ação escolhida.
Em caso de ação inválida, o programa deve exibir a mensagem de erro: "Tente novamente". Veja exemplos abaixo:

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas.
Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

    Entrada	    Saída

Jubileu      |   Jubileu escolheu Fugir!
Fugir        |
-------------|-------------------------------
Elsa Yajin   |   Elsa Yajin escolheu Atacar!
Atacar       |
-------------|-------------------------------
Ragnar       |   Tente novamente
Correr       |

*/

// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:



//********************************RESOLUÇÃO****************************

// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
if (acaoEscolhida.toLowerCase() === "atacar") {     //  Aqui utilizamos as condições if, else if e else para verificar as ações para cada mensagem. E usamos o metodo toLowerCase para retorna o valor da string que foi chamada convertido para minúsculo.
print(`${nomePersonagem}  escolheu Atacar!`);
} else if (acaoEscolhida.toLowerCase() === "fugir") {
print(`${nomePersonagem}  escolheu Fugir!`);
} else {
  print("Tente novamente");
}