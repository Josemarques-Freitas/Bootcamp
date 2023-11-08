/* Faça um programa para calcular o valor de uma viagem.

Você terar 3 variveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio do combustível do carro por KM;
3 - Distância em KM da viagem;

*/

const precoCombustiel = 5.99;
const kmPorLitros = 11;
const distanciaEmKm = 200;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustiel;

console.log(valorGasto.toFixed(2));

// .toFixed(2) serve para aredondar os numeros.

