//Arrays
//igual nas outras linguagens, começa do 0 

/*let nomes = ['laura', 'cesar', 'luiza']

//aparece todos os nomes em linha, laura, cesar, luiza
console.log(nomes)

//aparece laura
console.log(nomes[0])

//nesse os nomes aparecem em uma tabela
console.table(nomes)

//alterar os nomes dentro do array
nomes[1] = 'peralta'

console.log(nomes)
console.log(nomes[1])

//Métodos para operar Arrays

//Alterar membros
nomes[1] = 'anna karienina'
console.log(nomes)

//Quantidade de elementos que tem no array
console.log(nomes.length)

//Adicionar elementos ao final do array
nomes.push("peralta")
nomes.push("cesar")
console.table(nomes)

//Adicionar elementos no inicio do array
nomes.unshift("mauro")
nomes.unshift("cláudia")
console.table(nomes)

//Remover elementos do inicio
//nomes.shift()
console.table(nomes)

//Remover elementos do fim 
//nomes.pop()
console.table(nomes)

//    adicionar/remover elemento do final é uma pilha, push/pop

//Os elementos removidos podem ser guardados dentro de uma variavel 
let removidosFim = nomes.pop()
let removidosInicio = nomes.shift()
console.table("Removido Inicio: " + removidosInicio)
console.table("Removido Fim: " + removidosFim)
console.table(nomes)

// Adicionar/Remover elementos em qualquer posicao
//a partir da posicao 0, remover 1 elemento, e adicionar unknow
//removeu mauro e colocou unknow
//nomes.splice(0,1,"unknow")
console.table(nomes)

//Ver elementos eliminados
console.table(nomes)
let eliminados = nomes.splice(0, 1, "unknow")
console.table(nomes)
console.table(eliminados)


let nomes = ['laura', 'raissa', 'gabriel', 'isabella']

//Extrair partes de um arrays

console.table(nomes)
//extrai os nomes da posição 0 até 3-1, entao 'laura', 'raissa', 'gabriel'
let nomes_extraidos = nomes.slice(0,3)
console.log(nomes_extraidos)

//Juntar dois arrays
let outras = ['sarah', 'estefany', 'nath']
console.table(nomes)
nomes = nomes.concat(outras)
console.table(nomes)

//Procurar um item no array
//retorna true(se tiver o nome) ou false(se nao tiver o nome)
console.log(nomes.includes("laura"))
console.log(nomes.includes("cesar"))

//Procurar posição de item no array
console.table(nomes)
console.log(nomes.indexOf("laura"))

//converter um array numa string
let todos_os_nomes = nomes.join(", ")
console.log(todos_os_nomes)

*/

//Ordenar arrays

//ordenar o array de forma ascendente (alfabetica A-Z)
let nomes = ["laura","luiza","gabriel","raissa","estefany","karol","nath"]
nomes.sort()
console.table(nomes)

//Ordenar o array de forma descendente (alfabetica Z-A)
//nao existe uma funcao que alterne de forma descendente, tem que declarar o sort primeiro e depois reverter (reverse)
nomes.sort()
nomes.reverse()
console.table(nomes)

//Sintaxe alternativa (para descentende)
nomes.sort().reverse()
console.table(nomes)

//ou ainda (a melhor forma de fazer a forma descendete)
console.table(nomes.sort().reverse())

//altera a estrutura do array

//tudo funciona para arrays numericos, mas nao sera sempre certo
//o 1 e o 100 ficaram seguidos, ou seja, nao está em ordem, de forma numerica
let valores = [1,30,20,100,50,56,45]
valores.sort()
console.table(valores)

//as formas corretas de fazer essa ordenacao numerica precisaria de funções 
