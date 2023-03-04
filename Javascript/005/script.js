// Estruturas condicionais

let condicao_do_tempo = "sol"

if(condicao_do_tempo == "sol"){
    console.log("O tempo está bom para ir a praia!")
}else if (condicao_do_tempo == "chuva"){
    console.log("O tempo não esta bom para passeio")
}
else{
    console.log("O tempo esta normal")
}


//mesma coisa das outras linguagens
//Operadores de comparacao e lógicos -> sao os mesmos



//(!)
let enviar_email = false
if(!enviar_email){
    console.log('Não enviar email')
}

//vai executar a mensagem, o ! já está dizendo que é false
// que é igual a 
if(enviar_email == false){
    console.log('Não enviar email')
}

//Operador Ternário 
var resultado = (condição) ? valor1 : valor2
//-> ver se o resultado eh igual a condição e o ? faz a pergunta "É VERDADEIRO?" se sim,é igual ao valor1, caso contrário é igual ao valor2
//uma simplificacao do if else

let valor = 100
valor == 100 ? console.log('SIM') : console.log('NÃO')
//vai executar o SIM pois é verdadeiro

// -> ou usa o operador ternario ou if else, nao pode misturar um com o outro, tipo usar o operador ternario com bloco usando o {}