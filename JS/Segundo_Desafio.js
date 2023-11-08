// Faça um programa para calcular o valor de uma viagem.

// Você terar 5 variveis, sendo elas:
// 1 - Preço do Etanol;
// 2 - Preço da Gasolina;
// 3 - Tipo de combustível que está no carro;
// 4 - Gasto médio do combustível do carro por KM;
// 5 - Distância em KM da viagem;

//Imprima no console o valor que será gasto para realizar está viagem.
const precoEtanol = 4.85;
const precoGasolina = 5.99;
const kmPorLitros = 12;
const tipoCombustivel = "Gasolina"; //Altera aqui entre Etanol e Gasolina para saber o valor dos combustiveis.
const distanciaEmKm = 200;

const litrosComsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === "Etanol") {
   const valorGasto = litrosComsumidos * precoEtanol;
   console.log(valorGasto.toFixed(2), "Etanol");
} else {
    const valorGasto = litrosComsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2), "Gasolina");
}






// .toFixed(2) serve para aredondar os numeros.