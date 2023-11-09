
//Criando methodos.

const carro = { // Variavel e suas Instâncias
    marca: 'Gol',
    ano: 2008,

    //Criando o methodo descrever.

    descreva: function () {
        console.log(`Meu carro é um ${this.marca} e o ano dele é ${this.ano}`) //OBS: não é aspas, aperte shift + Tíu 2x para essa "Aspas"
    }
};

carro.descreva();


//Classe é o tipo de Objeto. Exemplo: Carro, Notbook, TV... pois elas tem varias caracteristicas.
// Exemplo: Classe = Carro,
// marca;
// ano;
// cor;

class pessoa {
    nome;
    idade;
}
//Instância é as caracteristicas das classes.
// Exemplo:const bmwXle = new carro();
// bmwXle.marca = 'BMW';
// bmwXle.ano = 2023;
// bmwXle.cor = 'Preto';

const markim = new pessoa(); //Instânciando a variavel da nova pessoa.
markim.nome = 'Josemarques Freitas'; // Add nome
markim.idade = 35;  // Add idade




// console.log(bmwXle); Para imprimir os dados do novo carro.

console.log(markim); // Imprimindo dados da nova pessoa.