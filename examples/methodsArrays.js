let numbers = [90, 50, 77, 60];
let arrayString = ['Gaúcha', 'Paulista', 'Francesa'];
console.log(arrayString);
// Join - Separador entre índices do array
console.log(arrayString.join(' / '));

// Sort - Ordena os valores do array.
console.log(numbers.sort().join(' - '));

// Reverse - Inverte a ordem dos elementos. O primeiro torna-se o último e o último torna-se o primeiro.
console.log(numbers.reverse().join(' - '));

// Slice - Retorna os elementos selecionados de um array.
console.log(numbers.slice(2,4).join(' / '));

// Length - Mostra o número de elementos em um array.
console.log(numbers.length);

// Push - Adiciona valores ao final de um array, retornando o seu novo tamanho.
console.log(numbers.push(33, 47));

// Shift - Retorna o primeiro valor de array e remove os demais.
console.log(numbers.shift());

// Pop - Retorna o último elemento de um array e remove os demais.
console.log(numbers.pop());

console.log(typeof(numbers));