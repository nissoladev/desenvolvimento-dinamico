// Lista de objetos que çontém múltiplos valores armazenados dentro de uma lista
// Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor.
// JavaScript não possui um tipo de dados array específico.
// O índice do array inicia sempre na posição 0.

var array = new Array (10, 20, 30, 49);
var random = Array("Pão", "Leite", "Açúcar", "Café");
var concatArray = [random + array];
console.log(typeof (random));
console.log(typeof (array));
console.log(typeof (concatArray));
console.log(array.indexOf(49, 3) == 3);
console.log(concatArray);

var listaArray = [42]; // Array com apenas 1 elemento: o número 42.
listaArray.length = 60;
console.log(` O tamanho do Array é: ` + listaArray.length);

var listaComprimentoArray = Array(99); // Define o comprimento do array sem elemento algum dentro dele.
console.log(listaComprimentoArray.length);

var povoandoArray = [];
povoandoArray[0] = "Guilherme";
povoandoArray[2] = "Jamal";
console.log(`A lista "povoandoArray" ficou assim: ` + povoandoArray + `.`);

var outroModoPovoarArray = new Array('Fábio',povoandoArray, 3);
console.log(`O array outroModoPovoarArray ficou assim: ` + outroModoPovoarArray + `.`);

var terceiroModoPovoarArray = ['Manga', 'Banana', "Maçã"];
console.log(`O "terceiroModoPovoarArray" ficou assim: ` + terceiroModoPovoarArray + `.`);

var lista = new Array(3, 5, 90);
lista.push(80, 50, 49, 5, 99);
console.log(lista);
lista.pop();
lista.pop();
lista.pop();
console.log(lista);