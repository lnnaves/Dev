//Switch case
//Igual nas outras linguagens

let valor = 1 

switch(valor){
    case 1: 
        //código para valor = 1
    break
    
    case 2: 
        //código para valor = 2
    break 

    default:
        //código para o default
    break; 
}

//usar ; ao final do comando é opcional em javascript

let valor1 = true;

switch(valor1){
    case true: 
        //codigo
    break

    case false:
        //codigo
    break
}

let valor2 = 10
switch(true){
    case(valor2 < 10):
        //código
    break

    case (valor2 > 10):
        //código
    break

    default:
        //código
    break
}
//nesse caso vai executar o default pois é =10 e nao >10 ou <10


//pode usar switch case para string também
let nome = "joao"
switch(nome){
    case "joao vitor":
    case "joao paulo":
    case "joao pedro":
    case "joao":
        console.log("O nome tem joao")//código -> todos os case acima irao executar esse codigo
        break

    case fernando:
        //codigo para o fernando
        break

    default:
        //codigo
        break
    
}