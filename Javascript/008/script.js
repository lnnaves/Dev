//Ciclos, loops, iterações 

//while é semelhante ao resto das linguagens, lembrando que só executa se a condição for verdadeira
//do while é igual também, lembrando que o do while o comando executa pelo menos uma vez
//for é igual também e é o mais usado

/*
for(iniciação; condição; incremento){

}

for(let valor = 0; valor <= 5; valor++){

}

//FOR IN
for(valor in valores){
    console.log(valor)
}
*/

//nao vai funcionar direito porque vai apresentar a ordem (0 ao 4) ao inves dos valores 1 ao 5, é mais funcional quando usar objetos
let valor = 0;
let valores = [1,2,3,4,5]
for(valor in valores){
    console.log(valor)
}

//clico FOR OF
//esse funciona corretamente, aparece laura gabriel raissa na ordem
//em cada volta do ciclio o vai pegar um elemento de nomes e colocar no nome
let nomes = ["laura","gabriel","raissa"]
for(nome of nomes){
    console.log(nome)
}

//clico FOREACH (mais usado)
//funciona de forma correta, laura peralta anna karienina na ordem certa
//forEach é uma funcao de array
//é uma instrução introduzida com ecmascript que permite circular por cada um dos elementos que existe no array
let names = ["laura","peralta","anna karienina"]
names.forEach((n) => console.log(n))

