function aplicandoDesconto(valor, desconto) {
    return (valor - (valor *(desconto / 100)));
}

function aplicandoJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

    let precoEtiqueta = 100;
    let formaDePagamento = 1;

    if(formaDePagamento === 1) {
        console.log(aplicandoDesconto(precoEtiqueta, 10), "Desconto de 10%");
    } else if (formaDePagamento === 2) {
        console.log(aplicandoDesconto(precoEtiqueta, 15), "Desconto de 15%");
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta, "Sem Juros");
    } else {
        console.log(aplicandoJuros(precoEtiqueta, 10), " 10% de Juros");
    }
        