/*
    Elabore um algoritimo que calcule o que deve ser pago por um produto considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo
    adequado.

    Código Condição de Pagamento:
     1 - Á vista Débito, recebe 10% de desconto;
     2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
     3 - Em duas vezes, preço normal de etiqueta sem juros;
     4 - Acima de duas vezes, preço normal de etiqueta, mais juros de 10%;
 */

    let precoEtiqueta = 100;
    let formaDePagamento = 4;

    if(formaDePagamento === 1) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.1), "Desconto de 10%");
    } else if (formaDePagamento === 2) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.15), "Desconto de 15%");
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta, "Sem Juros");
    } else {
        console.log(precoEtiqueta + (precoEtiqueta * 0.1), " 10% de Juros");
    }
        
    
