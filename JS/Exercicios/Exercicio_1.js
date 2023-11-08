/* 
    Faça um algoritmo em Javascript que dados as 3 notas tiradas por um aluno em um semestre da faculdade que calcule 
    e imprima a sua média e a sua classificação conforme a tabela abaixo:
    
    Média = (nota 1 + nota 2 + nota 3) / 3; 
 
    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passado de semestre;
*/

// Solicita ao usuário as três notas
let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

// Calcula a média
let media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média : ", media.toFixed(2));

// Determina a classificação com base na média

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado"); //Obs: else não abre parenteses "(".
}