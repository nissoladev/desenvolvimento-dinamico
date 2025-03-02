//Boolean - True or False (Normalmente usado para instruções de decisão e for)
nome = true;
name = false;
console.log(nome);
console.log(name);

//Null
// marca
// console.log(marca);
marca = null;
console.log(marca);

//Undefined - Valor atribuído para variáveis que acabaram de ser declaradas ou a argumentos formais (parâmetros de funções) para os quais não existem argumentos reais.
var x;
console.log(x);

//Number
var a = 10;
console.log(a);

//String
var str = "String é uma sequência de caracteres usados para representar texto.";
console.log(str);

//Objeto - Estrutura de dados contendo dados e instruções
let obj = new Object()
obj.numero = 42;
obj.name = "Paul";
console.log(obj);

var teste = [];
console.log(typeof(teste));


var escrito = "guilherme";
if (typeof(escrito) == "string") {
    console.log(escrito.toLocaleUpperCase());
} else {
    console.log("Você precisa digitar uma string.");
}