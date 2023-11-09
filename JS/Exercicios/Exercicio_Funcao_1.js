    
    function calcularImc(peso, altura) {   //Função serve para encrementar trechos de código. Mas utilizado para deixar salvos calculos de expressões.
        return peso / Math.pow(altura,2);
    }

    function classificarImc(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso Normal";
        } else if (imc >= 25 && imc < 30) {
            return "Acima do Peso";
        } else if ( imc >= 30 && imc < 40) {
            return "Obeso";
        } else {
            return "Obesidade Grave"
        }
    }
    
    function main() {
        let peso = 90;
        let altura = 1.71;
    
    
        let imc = calcularImc (peso, altura)
        console.log(classificarImc(imc.toFixed(2)));
    }

    main();