//Funções
//a ideia é igual a todas

/*function nome_funcao(){
    //codigo
} */

//sem parâmetro
function escrever(){
    console.log("É preciso mais do que inteligência para agir de forma inteligente - Dostoievski")
}

escrever()

//com parâmetro mas sem retorno
function escritores(nomes){
    console.log(nomes)
}

escritores("Thomas Mann")
escritores("Goethe")


//com parâmetro e com retorno
function somar(a, b){
    return a + b
}

console.log(somar(1,2))

let resultado = somar(1,2)
console.log("Numero de escritores: " + resultado)


//com parâmetro padrao
function saudacao(mensagem = "good morning"){
    console.log(mensagem)
}

//exibi good morning
saudacao()
//ignora o valor atribuido e passa a ser good evening
saudacao("good evening")